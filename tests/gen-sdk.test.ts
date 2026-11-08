import { spawnSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync
} from "fs";
import { tmpdir } from "os";
import { join, resolve } from "path";

describe("SDK generation failure propagation", () => {
  let directory: string;

  beforeEach(() => {
    directory = mkdtempSync(join(tmpdir(), "circle-codegen-"));
    mkdirSync(join(directory, "src/generated"), { recursive: true });
    mkdirSync(join(directory, "bin"));
    writeFileSync(join(directory, "src/generated/index.ts"), "old index\n");
    writeFileSync(
      join(directory, "bin/npx"),
      `#!/usr/bin/env bash
printf '%s\\n' "$1" >> calls
if [[ "$1" == openapi-generator-cli ]]; then
  [[ "$FAIL_STAGE" == generator ]] && exit 23
  printf 'generated index\\n' > src/generated/index.ts
else
  [[ "$FAIL_STAGE" == transform ]] && exit 29
  printf 'transformed index\\n'
fi
`,
      { mode: 0o755 }
    );
    writeFileSync(
      join(directory, "bin/yarn"),
      `#!/usr/bin/env bash
printf '%s\\n' "$1" >> calls
[[ "$FAIL_STAGE" == "$1" ]] && exit 31
exit 0
`,
      { mode: 0o755 }
    );
  });

  afterEach(() => {
    rmSync(directory, { recursive: true, force: true });
  });

  it.each<[string, number, string[], string | null]>([
    ["generator", 23, ["openapi-generator-cli"], null],
    [
      "transform",
      29,
      ["openapi-generator-cli", "ts-node"],
      "generated index\n"
    ],
    [
      "lint-fix",
      31,
      ["openapi-generator-cli", "ts-node", "lint-fix"],
      "transformed index\n"
    ],
    [
      "format",
      31,
      ["openapi-generator-cli", "ts-node", "lint-fix", "format"],
      "transformed index\n"
    ],
    [
      "",
      0,
      ["openapi-generator-cli", "ts-node", "lint-fix", "format"],
      "transformed index\n"
    ]
  ])("stops at %s (empty means success)", (stage, status, calls, index) => {
    const result = spawnSync(
      "bash",
      ["-c", 'export PATH="$PWD/bin:$PATH"; bash "$GEN_SDK_SCRIPT"'],
      {
        cwd: directory,
        env: {
          ...process.env,
          FAIL_STAGE: stage,
          GEN_SDK_SCRIPT: resolve(
            __dirname,
            "../build-utils/gen-sdk.sh"
          ).replace(/\\/g, "/")
        },
        encoding: "utf8"
      }
    );
    expect(result.error).toBeUndefined();
    expect(result.stderr).toBe("");
    expect(result.status).toBe(status);
    expect(
      readFileSync(join(directory, "calls"), "utf8").trim().split("\n")
    ).toEqual(calls);
    const indexPath = join(directory, "src/generated/index.ts");
    expect(existsSync(indexPath) ? readFileSync(indexPath, "utf8") : null).toBe(
      index
    );
  });
});
