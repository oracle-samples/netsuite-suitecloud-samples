const SuiteCloudJestUnitTestRunner =
require('@oracle/suitecloud-unit-testing/services/SuiteCloudJestUnitTestRunner')

module.exports = {
  defaultProjectFolder: 'src',
  commands: {
    'project:deploy': {
      beforeExecuting: async args => {
        if (SuiteCloudJestUnitTestRunner) {
          await SuiteCloudJestUnitTestRunner.run({
            // Jest configuration options.
          })
        }
        return args
      },
    },
  },
}
