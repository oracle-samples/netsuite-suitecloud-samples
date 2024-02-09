const SuiteCloudJestConfiguration =
require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')
const cliConfig = require('./suitecloud.config')
const SuiteCloudJestStubs = require('suitecloud-unit-testing-stubs/SuiteCloudJestStubs')
 
module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: SuiteCloudJestStubs.customStubs
})