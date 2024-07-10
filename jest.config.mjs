import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Troublesome dependencies
const esModules = [
  "query-string",
  "decode-uri-component",
  "split-on-first",
  "filter-obj",
];

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Adjust the alias as per your project structure
  },
  coverageReporters: [
    "html",
    "text",
    "text-summary",
    "cobertura",
    "lcov",
    "clover",
  ],
  reporters: ["default", "jest-junit"],
};

const test = async () => ({
  ...(await createJestConfig(config)()),
  transformIgnorePatterns: esModules.length
    ? [`/node_modules/.pnpm/(?!${esModules.join("|")})`]
    : [],
});

export default test;
