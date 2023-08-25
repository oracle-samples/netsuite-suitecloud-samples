// eslint-disable-next-line max-len
const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')

module.exports = SuiteCloudJestConfiguration.build({
  'projectFolder': 'src',
  'projectType': SuiteCloudJestConfiguration.ProjectType.ACP
})
