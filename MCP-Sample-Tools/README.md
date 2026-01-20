# Custom Tool Samples for NetSuite AI Connector Service

This repository provides sample SuiteCloud projects with tools for the NetSuite AI Connector Service. The NetSuite AI Connector Service enables secure integration of your own AI solutions with NetSuite using the Model Context Protocol (MCP), offering a flexible and scalable framework.

These samples demonstrate how you can automate tasks, extend NetSuite’s capabilities, and integrate with external AI clients for data retrieval, process automation, and more. Example tools are built with custom tool scripts and SuiteScript 2.1, managed within an SDF account customization project (ACP), and use standard SuiteScript modules.

For more information, see [NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_7200233106.html) and [MCP Sample Tools](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_8204806622.html).

## What's New: Custom Tool Script Execution Log Support in NetSuite 2026.1
NetSuite 2026.1 includes changes to the custom tool script type and its corresponding SuiteCloud Development Framework (SDF) object. With this release, you can now view custom tool script execution logs directly from the UI, on the Script Execution Logs page.

To view custom tool script execution logs in NetSuite 2026.1, you must update your custom tool implementations to use the new specifications and the `toolset` SDF object after your account is upgraded. New scripts should also use these specifications if you want to use the logging feature. For details and step-by-step instructions on how to update your custom tools, read [How to Update Custom Tool Scripts for Execution Log Support in NetSuite 2026.1 (SuiteAnswers ID: 1024036)](https://suiteanswers.custhelp.com/app/answers/detail/a_id/1024036) (NetSuite login required).

This repository has two sample SuiteCloud projects:

- [Sample Toolsets for 2026.1](./Sample-Toolsets/) - This sample uses the new specifications for custom tool script and the `toolset` SDF object. It works on NetSuite 2026.1 accounts, but cannot be deployed to NetSuite 2025.2 accounts.
- [Sample Tools for 2025.2](./Sample-Tools/) - This sample uses the old specifications for custom tool script and the `tool` SDF object. You can deploy it to NetSuite 2025.2 or 2026.1 accounts, but script execution logs won't be available.