const SuiteCloudJestConfiguration = 
require(`@oracle/suitecloud-unit-testing/
 jest-configuration/SuiteCloudJestConfiguration`)
const cliConfig = require('./suitecloud.config')

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: [
    {
      module: 'N/log',
      path: '<rootDir>/customStubs/log.js'
    }, {
      module: 'N/error',
      path: '<rootDir>/customStubs/error.js'
    }
  ]
})
