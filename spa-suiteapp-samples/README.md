# Single Page Application (SPA) SuiteApp Samples

This repository contains sample SuiteApps that use single page applications (SPAs). These SPAs are part of SuiteApp projects created using SuiteCloud Development Framework (SDF), and are built using the UI components available in the NetSuite UI Framework (UIF).

These samples use the SPA SuiteApp project template that contains a TypeScript compiler, which enables you to develop SuiteApps using JSX and `import` rather than `require`. It also enables you to use JavaScript or TypeScript in your script files.

Each sample SuiteApp contains `ESLint` and `Prettier` configuration files, and you can configure them using the `inspect` and `lint` npm scripts available in each SuiteApp. Using both is highly recommended to ensure adherence to coding standards.

## Availability
The Single Page Application feature in NetSuite is available by request only. This feature requires the use of SuiteCloud Development Framework (SDF) SuiteApp projects and SuiteScript 2.1. For information about the requirements to use this feature and how to request for access, see [Single Page Application](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_161244635803.html#Single-Page-Applications).


## Environment Setup

### NetSuite Account Setup

1. Go to `Setup > Company > Enable features`.
1. Click the `SuiteCloud` subtab.
1. Enable the following features:
   - `Client SuiteScript`
   - `Server SuiteScript`
   - `Token-based Authentication`
   - `OAuth 2.0`
   - `SuiteCloud Development Framework`
1. Set up SuiteCloud Development Framework (SDF). For more information, see [SuiteCloud Development Framework Setup](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4724784139.html#SuiteCloud-Development-Framework-Setup).
1. Enable all the features detailed in the project's `manifest.xml` file.

### SuiteCloud Command Line Tools

1. Install NodeJS https://nodejs.org/en/ if you don't have it installed.
1. Open console and install the SuiteCloud CLI: `npm i -g @oracle/suitecloud-cli`.

### SuiteCloud Development Tools
Set up your preferred development tool. You can choose from the following SuiteCloud Software Development Kit (SDK) tools:
   - [SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/book_159223417590.html#SuiteCloud-Extension-for-Visual-Studio-Code)
   - [SuiteCloud IDE Plug-in for WebStorm](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/book_1529085902.html#SuiteCloud-IDE-Plug-in-for-WebStorm)
   - [SuiteCloud CLI for Java](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/book_1558706585.html#SuiteCloud-CLI-for-Java)
   - [SuiteCloud CLI for Node.js](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/book_1558706016.html#SuiteCloud-CLI-for-Node.js)


## Sample SuiteApps

There are several SuiteApps in the repository including basic Hello World apps, apps demonstrating basic NetSuite UIF
principles, and complex apps that demonstrate full-scale NetSuite UIF features and use SuiteScript to handle NetSuite data.

SuiteApps written in Javascript are marked with `(JS)` at the end of the description, and those written in TypeScript are marked with `(TS)`.

- [Airport 360](./airport360) - Sample application that demonstrates a working example of a 360-type SuiteApp (TS)
- [Basics - Routing](./basics-routing) - Demonstrates the basic principles of routing (TS)
- [Basics - State Management](./basics-state-management) - Demonstrates the basic principles of state management (TS)
- [Hello World - JS](./helloworld-js/) - Minimal 'Hello World!' app (JS)
- [Hello World - TS](./helloworld-ts/) - Minimal 'Hello World!' app (TS)
- [Item 360](./item360/) - Sample application that demonstrates all the common SPA patterns and data handling using SuiteScript, inspired by 360-type SuiteApps (TS)

### Build Setup

1. Open a terminal or command line.
1. Navigate to the directory of the corresponding app folder.
1. Run `npm i` to install build dependencies.
1. Optionally, run `npm run lint` to invoke linters.
1. Run `npm run build` to build the project. This task runs the TypeScript compiler on the files in `src/SuiteApps` and saves the result in a new `build` directory.
1. Run `npm run bundle` to bundle the built app. This task takes the transpiled sources from the `build` directory, bundles them together and minifies them. The result is saved in `src/FileCabinet/SuiteApps` and is ready to be deployed to the target NetSuite account.

### SuiteApp Deployment

1. Log in to your development environment.
1. Set up the SuiteCloud account. 
   - For SuiteCloud Extension for Visual Studio Code, see [Setting Up Accounts in SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160147609118.html#Setting-Up-NetSuite-Accounts-in-SuiteCloud-Extension-for-Visual-Studio-Code)
   - For SuiteCloud IDE Plug-in for WebStorm, see [SuiteCloud IDE Plug-in for WebStorm Account Setup](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1530731998.html#SuiteCloud-IDE-Plug-in-for-WebStorm-Account-Setup)
   - For SuiteCloud CLI for Java, see [authenticate](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_157052592790.html#authenticate)
   - For SuiteCloud CLI for Node.js, see [account:setup](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156044528841.html#account%3Asetup)
1. Deploy the built SuiteApp to the target NetSuite account. Run `npm run deploy` or refer to the following topics for tool-specific instructions.
   - For SuiteCloud Extension for Visual Studio Code, see [Deploying a SuiteCloud Project to Your NetSuite Account with SuiteCloud Extension for Visual Studio Code](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_160147342366.html#Deploying-a-SuiteCloud-Project-to-Your-NetSuite-Account-with-SuiteCloud-Extension-for-Visual-Studio-Code)
   - For SuiteCloud IDE Plug-in for WebStorm, see [Deploying a SuiteCloud Project to Your NetSuite Account with SuiteCloud IDE Plug-in for WebStorm](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_1539789992.html#Deploying-a-SuiteCloud-Project-to-Your-NetSuite-Account-with-SuiteCloud-IDE-Plug-in-for-WebStorm)
   - For SuiteCloud CLI for Java, see [deploy](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4788673412.html#deploy)
   - For SuiteCloud CLI for Node.js, see [project:deploy](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_156044636320.html#project%3Adeploy)
1. Open the single page application in your NetSuite account by going to `Customization > Scripting > Single Page Applications`.

## Links
- [Single Page Application](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_161244635803.html#Single-Page-Applications)
- [SuiteCloud CLI](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_1558708800.html#SuiteCloud-CLI-for-Node.js-Guide)
- [SuiteCloud Development Framework](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/book_4702638251.html#SuiteCloud-Development-Framework)
