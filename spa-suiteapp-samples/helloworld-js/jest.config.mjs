/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/test/unit/**/*.{test,spec}.{ts,tsx,js,jsx}'],
    verbose: true,
    moduleNameMapper: {
        '^@uif-js/core/jsx-runtime$': '<rootDir>/test/stubs/@uif-js/core/jsx-runtime.js',
        '^@uif-js/core$': '<rootDir>/test/stubs/@uif-js/core.js',
        '^@uif-js/component$': '<rootDir>/test/stubs/@uif-js/component.js',
    },
    transform: {
        ".(ts|tsx|js|jsx)$": [
            'ts-jest',
            { tsconfig: "tsconfig.test.json" },
        ]
    }
};