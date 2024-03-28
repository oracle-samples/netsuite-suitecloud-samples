/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/unit/**/*.{test,spec}.{ts,tsx,js,jsx}'],
  verbose: true,
  moduleNameMapper: {
      '^N/record$': '<rootDir>/test/stubs/N/record',
      '^@uif-js/core$': '<rootDir>/test/stubs/@uif-js/core.ts',
  },
  transform: {
      ".(ts|tsx|js|jsx)$": [
          'ts-jest',
          { tsconfig: "tsconfig.test.json" },
      ]
  }
};