# Custom Tool Samples for NetSuite AI Connector Service

This SuiteCloud project contains sample custom tools that can be used with the NetSuite AI Connector Service. 

The NetSuite AI Connector Service enables you to securely connect your own AI solutions to NetSuite and supports the Model Context Protocol (MCP) to provide a secure, flexible, and scalable integration framework. By leveraging these samples or building your own custom tools, you can automate tasks, extend NetSuite’s capabilities, and tailor solutions for data retrieval, process automation, or smarter integrations with external AI clients. For more information, see [NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html).

# Key Concepts

* **SuiteScript 2.1** – This SuiteScript version is the latest available version and includes new language features that are not part of SuiteScript 2.0. This sample uses SuiteScript 2.1. For more information, see [SuiteScript 2.1](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_156042690639.html).

* **Custom tool script type** - Custom tool scripts let you build NetSuite tools that external AI clients can invoke through the NetSuite AI Connector Service. With these scripts, you can retrieve data, trigger actions, or perform most SuiteScript-supported operations using natural language prompts in your AI client. For more information, see [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/T_article_1185045525_1.html).

# Prerequisites
1. Enable the required features in your NetSuite account:
    - `Server SuiteScript`
    - `OAuth 2.0`
    - `SuiteCloud Development Framework`
1. Set up your preferred SuiteCloud SDK tool.
1. Set up the NetSuite AI Connector Service. For more information, see [NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html).


# Creating Custom Tools 
1. Create a SuiteCloud project using either a SuiteApp project or an account customization project (ACP).
1. Create a custom tool script. See [SuiteScript 2.1 Custom Tool Script Type](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/T_article_1185045525_1.html).
1. Define the tools in a JSON schema file. See [SuiteScript 2.1 Custom Tool Script Type Reference](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/T_section_0724071739_1.html).
1. Create the SDF Object XML for your custom tool script.
1. Deploy the SuiteCloud project to your NetSuite account.
1. From your AI client, connect to the NetSuite AI Connector Service.
1. Invoke the tools using natural language prompts.

For more information, see [Creating Custom Tools](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_162020236.html).