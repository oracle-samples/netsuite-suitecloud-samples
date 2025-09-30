const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const cliConfig = require("./suitecloud.config");

const defaultSuiteCloudConfig = SuiteCloudJestConfiguration.build({
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.SUITEAPP,
  customStubs: [
    {
      module: "N/http",
      path: "<rootDir>/customStubs/http.js",
    },
  ],
});

// Adding Typescript support to your tests.
defaultSuiteCloudConfig.preset = "ts-jest";

module.exports = defaultSuiteCloudConfig;
