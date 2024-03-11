/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/test/unit/**/*.{test,spec}.{ts,tsx,js,jsx}'],
    verbose: true,
    moduleNameMapper: {
        '^@uif-js/core/jsx-runtime$': '<rootDir>/test/stubs/@uif-js/core/jsx-runtime.ts',
        '^@uif-js/core$': '<rootDir>/test/stubs/@uif-js/core.ts',
        '^@uif-js/component$': '<rootDir>/test/stubs/@uif-js/component.ts',
    },
    transform: {
        ".(ts|tsx|js|jsx)$": [
            'ts-jest',
            { tsconfig: "tsconfig.test.json" },
        ]
    }
};