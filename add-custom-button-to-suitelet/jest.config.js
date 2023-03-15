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
      module: 'N/runtime',
      path: '<rootDir>/customStubs/runtime.js'
    }, {
      module: 'N/runtime/script',
      path: '<rootDir>/customStubs/Script.js'
    }, {
      module: 'N/ui/serverWidget',
      path: '<rootDir>/customStubs/serverWidget.js'
    }, {
      module: 'N/ui/serverWidget/form',
      path: '<rootDir>/customStubs/Form.js'
    }, {
      module: 'N/ui/serverWidget/button',
      path: '<rootDir>/customStubs/Button.js'
    }
  ]
})
