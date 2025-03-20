/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['<rootDir>/../../test/integration/**/*.{test,spec}.{ts,tsx,js,jsx}'],
	verbose: true,
	moduleNameMapper: {
		'^N/record$': '<rootDir>/../../test/stubs/N/record',
		'^@uif-js/core$': '<rootDir>/../../test/stubs/@uif-js/core.ts',
	},
	globalSetup: './setup/jest.setup.ts',
	transform: {
		'.(ts|tsx|js|jsx)$': ['ts-jest', {tsconfig: 'tsconfig.test.json'}],
	},
};
