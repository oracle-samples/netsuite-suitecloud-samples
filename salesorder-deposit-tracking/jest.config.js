const SuiteCloudJestConfiguration = require(`@oracle/suitecloud-unit-testing/
 jest-configuration/SuiteCloudJestConfiguration`)

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: 'src', // or your SDF project folder
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: [
    {
      module: 'N/log',
      path: '<rootDir>/customStubs/log.js'
    }
  ]
})
