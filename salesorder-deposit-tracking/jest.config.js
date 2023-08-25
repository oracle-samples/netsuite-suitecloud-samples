const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: 'src', // or your SDF project folder
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP
})
