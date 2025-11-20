# Custom Tool Samples for NetSuite AI Connector Service

This SuiteCloud project contains sample tools for use with the NetSuite AI Connector Service. The NetSuite AI Connector Service enables you to securely connect your own AI solutions to NetSuite and supports the Model Context Protocol (MCP) to provide a secure, flexible, and scalable integration framework. 

By leveraging these samples or building your own tools, you can automate tasks, extend NetSuite’s capabilities, and tailor solutions for data retrieval, process automation, or smarter integrations with external AI clients. For more information, see [NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html).

This project includes tools that demonstrate the types of operations you can perform through conversational AI and serves as practical examples of what you can build using SuiteScript. The tools are implemented using custom tool scripts and SuiteScript 2.1, and are developed and managed within an SDF account customization project (ACP). These tools use the same SuiteScript modules, script types, and project structure available to SuiteCloud developers, enabling you to develop and deploy your own custom tools using the same approach. For more information, see [MCP Sample Tools](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8204806622.html).

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
You can download the MCP Sample Tools folder as a complete SDF account customization project. After downloading, open the project with an IDE that includes the NetSuite SuiteCloud IDE Plug-In or Extension, such as WebStorm or Visual Studio Code, or connect it to a NetSuite account using Node CLI or Java CLI. Use your preferred SuiteCloud SDK tool to deploy the entire solution to your account for testing.

This sample project implements tools using a custom tool script that contains the SuiteScript code, a JSON schema to specify tool actions, and an SDF XML object to register and configure the tool in NetSuite. For more information, see [SuiteScript 2.1 Custom Tool Script Type Reference](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0724071739.html).

For more information about the sample tools, see [Available Tools in the MCP Sample Tools](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_8204806632.html).

# Creating Custom Tools 
To develop your own tools, follow these steps:

1. Create a SuiteCloud project using either a SuiteApp project or an account customization project (ACP).
1. Create a custom tool script. See [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_1185045525.html).
1. Define the tools in a JSON schema file. See [Custom Tool JSON Schema](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_0724071739.html#subsect_0822091327).
1. Create the SDF Object XML for your custom tool script. See [Custom Tool Scripts as XML Definitions](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_0825085154.html).
1. Deploy the SuiteCloud project to your NetSuite account.
1. From your AI client, connect to the NetSuite AI Connector Service.
1. Invoke the tools using natural language prompts.

For more information, see [Creating Custom Tools for the NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_162020236.html).