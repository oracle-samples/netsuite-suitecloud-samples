/* eslint-disable max-len */
const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: 'src', // or your SDF project folder
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: [
    {
      module: 'N/runtime',
      path: '<rootDir>/customStubs/runtime.js'
    }, {
      module: 'N/log',
      path: '<rootDir>/customStubs/log.js'
    }, {
      module: 'N/runtime/script',
      path: '<rootDir>/customStubs/Script.js'
    }, {
      module: 'N/currentRecord',
      path: '<rootDir>/customStubs/currentRecord.js'
    }, {
      module: 'N/currentRecord/instance',
      path: '<rootDir>/customStubs/CurrentRecordInstance.js'
    }
  ]
})
