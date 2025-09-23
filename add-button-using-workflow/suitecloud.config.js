// Optional testing runner - only load if available
let SuiteCloudJestUnitTestRunner;
try {
	SuiteCloudJestUnitTestRunner = require('@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner');
} catch (error) {
	console.log('SuiteCloudJestUnitTestRunner not available - skipping unit tests');
}

module.exports = {
	defaultProjectFolder: 'src',
	commands: {
		"project:deploy": {
			beforeExecuting: async args => {
				if (SuiteCloudJestUnitTestRunner) {
					await SuiteCloudJestUnitTestRunner.run({
					    // Jest configuration options.
					});
				}
				return args;
			},
		},
	},
};