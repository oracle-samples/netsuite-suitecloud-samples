![image](https://user-images.githubusercontent.com/52827300/220511950-34c148c4-b8f8-452e-b01d-201070f0cd0a.png)

# NetSuite SuiteCloud Samples

This repository holds a variety of sample projects meant to demonstrate the ways that account customization projects can be created on [NetSuite's SuiteCloud platform](https://www.netsuite.com/portal/platform.shtml). Each folder represents an independent project with its own README.md file for detailed descriptions of the use case and customization.  

## Prerequisites
* You will need access to a NetSuite account that can be used with test data, such as a NetSuite sandbox account or trial/demo/training account.
* You will need one of the following tools from the SuiteCloud Developer Toolkit:
    * [SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_159223155621.html) 
    * [SuiteCloud Plug-in for Webstorm](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1529431804.html) 
    * [SuiteCloud Node CLI](https://github.com/oracle/netsuite-suitecloud-sdk) 
    * [SuiteCloud Java CLI](https://github.com/oracle/netsuite-suitecloud-sdk) 
* Existing knowledge of NetSuite, SuiteScript, and the SuiteCloud Development Framwork is helpful but not required.

## Installation

You can download a folder as a complete SDF account customization project. After you download the project, you can either open it using an IDE that offers the NetSuite SuiteCloud IDE Plug-In or Extension, such as WebStorm or Visual Studio Code, or you can connect it to a NetSuite account using Node CLI or Java CLI. In the IDE, you can see each of the customization objects (the scripts, custom fields, and saved search) represented as an XML file. Using the SuiteCloud IDE Plug-In or Extension, you can then choose to deploy the entire solution to your account for testing.

While the script deployments in the project default to Testing mode, the custom fields and saved search may be visible to others in your account. Use caution when choosing the NetSuite account and account type to download and test.


For information about deploying the project from the IDE to your account, see:

[Deploying a SuiteCloud Project to Your NetSuite Account with SuiteCloud IDE Plug-in for WebStorm](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1539789992.html)

[Deploying a SuiteCloud Project to Your NetSuite Account with SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160147342366.html)

This project utilizes a custom set of configurable JavaScript linting rules to automatically fix and format your code. You can optionally install ESLint into your local environment to receive code suggestions and find potential issues. For more information, see [ESLint](https://eslint.org/).

## Documentation

NetSuite's online documentation can be found in the Oracle Help Center at [docs.oracle.com](https://docs.oracle.com/en/cloud/saas/netsuite/index.html). The platform documentation can be found here: 
- SuiteCloud Platform Customization - https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1529088392.html

User guides in downloadable PDF format for NetSuite are listed here: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/preface_3710621755.html 

## Examples

SuiteCloud Development Framework (SDF) Tutorial - https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4702655701.html  
SuiteCloud Customization Tutorials - https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_159163143019.html

## Contributing

This project is not accepting external contributions at this time. For bugs or enhancement requests, please file a GitHub issue unless it’s security related. When filing a bug remember that the better written the bug is, the more likely it is to be fixed. If you think you’ve found a security vulnerability, do not raise a GitHub issue and follow the instructions in our [security policy](./SECURITY.md).

## Security

Please consult the [security guide](./SECURITY.md) for our responsible security vulnerability disclosure process.

## License
Copyright (c) 2023 Oracle and/or its affiliates The Universal Permissive License (UPL), Version 1.0.

Released under the Universal Permissive License v1.0 as shown at
<https://oss.oracle.com/licenses/upl/>.

## Disclaimer

The sample code included herein is provided on an "as is" basis, without warranty of any kind, to the fullest extent permitted by law. Oracle + NetSuite Inc. does not warrant or guarantee the individual success developers may have in implementing the sample code on their development platforms or in using their own Web server configurations. Oracle + NetSuite Inc. does not warrant, guarantee or make any representations regarding the use, results of use, accuracy, timeliness or completeness of any data or information relating to the sample code. Oracle + NetSuite Inc. disclaims all warranties, express or implied, and in particular, disclaims all warranties of merchantability, fitness for a particular purpose, and warranties related to the code, or any service or software related thereto. Oracle + NetSuite Inc. shall not be liable for any direct, indirect or consequential damages or costs of any type arising out of any action taken by you or others related to the sample code.
