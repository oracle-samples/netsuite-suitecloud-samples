const SuiteCloudJestConfiguration = require(`@oracle/suitecloud-unit-testing/
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
      module: 'N/ui/serverWidget',
      path: '<rootDir>/customStubs/serverWidget.js'
    }, {
      module: 'N/ui/serverWidget/form',
      path: '<rootDir>/customStubs/Form.js'
    }, {
      module: 'N/ui/serverWidget/field',
      path: '<rootDir>/customStubs/Field.js'
    }, {
      module: 'N/ui/serverWidget/sublist',
      path: '<rootDir>/customStubs/Sublist.js'
    }
  ]
})
