# SuiteWorld 2024 Third Party Tools


## Prerequisites
* You will need access to a NetSuite account that can be used with test data, such as a NetSuite sandbox account or trial/demo/training account.
* You will need one of the following tools from the SuiteCloud Developer Toolkit:
    * [SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_159223155621.html) 
    * [SuiteCloud Plug-in for Webstorm](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1529431804.html) 
    * [SuiteCloud Node CLI](https://github.com/oracle/netsuite-suitecloud-sdk) 
    * [SuiteCloud Java CLI](https://github.com/oracle/netsuite-suitecloud-sdk) 
* Existing knowledge of NetSuite, SuiteScript, and the SuiteCloud Development Framwork is helpful but not required.

## Installation

In the root folder run:

```
npm install
```


After that, you can check the output under FileCabinet folder.

## Jest TS support
Configuration is specified in `jest.config.js` via `preset = "ts-jest"`.

Sample TS test is located under `src\Typescripts\__tests__` folder.

## SuiteScript custom stubs
Custom stub implementation is located under `customStubs` folder. Configuration is specified in `jest.config.js` via `customStubs` options.

## Rollup
Configuration is specified in `rollup.config.mjs` file. 

We can run (see `package.json`):
```
npm run build
```
SuiteScript located under `src\Typescripts\com.netsuite.playground` folder will be transpiled first from TS to JS, using Typescript compiler, and bundled applying configuration specified in `rollup.config.mjs`.
- Transform them from ESM to AMD.
- Add banner.
- Minify.


## License
Copyright (c) 2023 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.

Released under the Universal Permissive License v1.0 as shown at
<https://oss.oracle.com/licenses/upl/>.

## Disclaimer

The sample code included herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. Oracle + NetSuite Inc. does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in using their own Web server configurations. Oracle + NetSuite Inc. does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. Oracle + NetSuite Inc. disclaims all warranties, express or implied, and in particular, disclaims all warranties of merchantability, fitness for a particular purpose, and warranties related to the code, or any service or software related thereto. Oracle + NetSuite Inc. shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.
