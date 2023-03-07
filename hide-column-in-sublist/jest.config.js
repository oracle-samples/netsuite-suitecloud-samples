/*
 * Copyright (c) 2021 Oracle and/or its affiliates.
 * Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl/
 *
 */
const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')
const SuiteCloudJestStubs = require('suitecloud-unit-testing-stubs')
const cliConfig = require('./suitecloud.config')

module.exports = SuiteCloudJestConfiguration.build({
  'projectFolder': cliConfig.defaultProjectFolder,
  'projectType': SuiteCloudJestConfiguration.ProjectType.ACP,
  'customStubs': [
    {
      'module': 'N/log',
      'path': '<rootDir>/customStubs/log.js'
    }, {
      'module': 'N/ui/serverWidget',
      'path': '<rootDir>/customStubs/serverWidget.js'
    }, {
      'module': 'N/ui/serverWidget/form',
      'path': '<rootDir>/customStubs/Form.js'
    }, {
      'module': 'N/ui/serverWidget/field',
      'path': '<rootDir>/customStubs/Field.js'
    }, {
      'module': 'N/ui/serverWidget/sublist',
      'path': '<rootDir>/customStubs/Sublist.js'
    }
  ]
})
