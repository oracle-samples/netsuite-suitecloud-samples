# Custom Tool Samples for NetSuite 2026.1

This sample uses the new specifications for custom tool and the `toolset` SDF object. You can deploy it to NetSuite 2026.1 accounts, where execution logs will be available when the custom tool scripts execute. It is not compatible with NetSuite 2025.2 accounts.

For information about the custom tool script enhancements in 2026.1, see [How to Update Custom Tool Scripts for Execution Log Support in NetSuite 2026.1 (SuiteAnswers ID: 1024036)](https://suiteanswers.custhelp.com/app/answers/detail/a_id/1024036) (NetSuite login required).

# Overview 
This sample project includes sets of files for custom tools. Each set consists of:
- A custom tool script containing the SuiteScript code, with each method in the file representing a tool.
- A JSON schema that defines all properties for the actions in your custom tool script.
- A `toolset` SDF XML object for registering and configuring the tool in NetSuite.

For information about custom tool scripts, see [SuiteScript 2.1 Custom Tool Script Type Reference](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0724071739.html).

For more information about the sample tools, see [Available Tools in the MCP Sample Tools](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_8204806632.html).

# Key Concepts

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses SuiteScript 2.1. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

* **Custom tool script type** - Custom tool scripts let you build NetSuite tools that external AI clients can invoke through the NetSuite AI Connector Service. With these scripts, you can retrieve data, trigger actions, or perform most SuiteScript-supported operations using natural language prompts in your AI client. For more information, see [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1185045525.html).

# Prerequisites
1. Enable the required features in your NetSuite account:
    - `Server SuiteScript`
    - `OAuth 2.0`
    - `SuiteCloud Development Framework`
1. Set up your preferred SuiteCloud SDK tool.
1. Set up the NetSuite AI Connector Service. For more information, see [NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html).

# Deploying MCP Sample Tools
**Important:** This sample is compatible with NetSuite 2026.1.

You can download the Sample Toolsets folder as a complete SDF account customization project. After downloading, open the project with an IDE that includes the NetSuite SuiteCloud IDE Plug-In or Extension, such as WebStorm or Visual Studio Code, or connect it to a NetSuite account using Node CLI or Java CLI. Use your preferred SuiteCloud SDK tool to deploy the entire solution to your account for testing.

# Creating Custom Tools 
To develop your own custom tools, follow these steps:

1. Create a SuiteCloud project using either a SuiteApp project or an account customization project (ACP).
1. Create a custom tool script. See [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1185045525.html).
1. Define the tools in a JSON schema file. See [Custom Tool JSON Schema](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0724071739.html#subsect_0822091327).
1. Create the SDF Object XML for your custom tool script. See [Custom Tool Scripts as XML Definitions](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0825085154.html).
1. Deploy the SuiteCloud project to your NetSuite account.
1. From your AI client, connect to the NetSuite AI Connector Service.
1. Invoke the tools using natural language prompts.

For more information, see [Creating Custom Tools for the NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_162020236.html).