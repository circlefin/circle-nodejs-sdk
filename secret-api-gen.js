import { registerEntitySecretCiphertext } from "@circle-fin/developer-controlled-wallets";
import fs from "fs";
const response = await registerEntitySecretCiphertext({
  apiKey:
    "TEST_API_KEY:a4c20122aeb5c8600299da79c3ba1a95:0bccb52ac8d8fc127abcaa067c1b61be",
  entitySecret:
    "ebcfc20adf6aae06e7da028ef45f4a5a4c43ceffd33262bb85f03ea14e7b2f53"
});
fs.writeFileSync("recovery_file.dat", response.data?.recoveryFile ?? "");
