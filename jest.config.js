/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "dist"],
  coverageProvider: "v8",
  coverageDirectory: "tests/coverage",
  collectCoverage: true,
  coveragePathIgnorePatterns: ["node_modules", "dist", "generated"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -10
    }
  }
};
