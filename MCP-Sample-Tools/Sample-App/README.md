# Hello World - MCP App Sample

This sample demonstrates a basic MCP App implemented as a custom tool in a NetSuite account customization project (ACP). 

## What are MCP Apps?

MCP Apps are interactive applications that an AI client can render within the chat experience. In NetSuite, an MCP App is implemented as a custom tool that includes UI metadata in its schema and points to a bundled HTML UI resource that an MCP-capable AI client can render. 

For general information about MCP Apps, see the [Model Context Protocol documentation for MCP Apps](https://modelcontextprotocol.io/extensions/apps/overview).

For information about creating custom tools in NetSuite, see [Creating Custom Tools for the NetSuite AI Connector Service](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/article_162020236.html).

## Project Structure

This sample project includes the files required for an MCP App custom tool:
- [`helloworld_app.js`](/MCP-Sample-Tools/Sample-App/src/FileCabinet/SuiteScripts/helloworld_app/helloworld_app.js) - A custom tool script containing the SuiteScript code for the MCP App tool.
- [`helloworld_app_schema.json`](/MCP-Sample-Tools/Sample-App/src/FileCabinet/SuiteScripts/helloworld_app/helloworld_app_schema.json) - A JSON schema that defines the tool and associates it with the MCP App UI by using `_meta.ui.resourceUri`.
- [`mcp-app.html`](/MCP-Sample-Tools/Sample-App/src/FileCabinet/SuiteScripts/helloworld_app/mcp-app.html) - A bundled HTML file that provides the MCP App user interface.
- [`custtoolset_helloworld_app.xml`](/MCP-Sample-Tools/Sample-App/src/Objects/custtoolset_helloworld_app.xml) - A `toolset` SDF XML object for registering and configuring the tool in NetSuite.

The MCP App is defined as the `helloworld_app` custom tool and linked to the HTML UI resource at `ui://SuiteScripts/helloworld_app/mcp-app.html`. 

> **NOTE**: The React project in `app/helloworld_app` is included in this sample as a reference implementation for the MCP App UI. It does not need to be included in the deployed ACP. Only the bundled HTML output (`mcp-app.html`) needs to be included in the SDF project at the File Cabinet path referenced by the custom tool schema. 

## Build the UI (Optional)

The bundled HTML UI (`mcp-app.html`) is already included in this sample, so the ACP can be deployed without rebuilding the UI. The React project is provided as a reference in case you want to modify and rebuild the app.

If you want to rebuild the UI bundle from the source project, run the following commands from the project root:

```bash
npm install
npm run helloworld_app
```

This rebuilds the UI bundle and copies `mcp-app.html` into the ACP File Cabinet path expected by the custom tool definition.

> **NOTE**: To build your own UI, you can use the [@modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps/) SDK, which provides tools and an App class to facilitate communication between your UI and the AI client. For more guidance and usage examples, see the [Model Context Protocol documentation for Building an MCP App](https://modelcontextprotocol.io/extensions/apps/build).

## Deploying the MCP App Sample

You can download the [Sample App](/MCP-Sample-Tools/Sample-App/) folder as a complete SDF account customization project. After downloading, open the project with an IDE that includes the NetSuite SuiteCloud IDE Plug-In or Extension, such as WebStorm or Visual Studio Code, or connect it to a NetSuite account using Node CLI or Java CLI. Use your preferred SuiteCloud SDK tool to deploy the entire solution to your account for testing.

## Test the Sample

After deploying the project:

1. Connect your AI client to the NetSuite AI Connector Service.
1. Invoke the Hello World MCP App tool from the client. For example, enter the prompt "Show me the Hello world sample app".
1. Confirm that the MCP App UI is rendered.
1. Interact with the app and verify that it loads successfully in the chat experience.

## Security Note
Do not embed secrets or sensitive data in MCP App HTML files. MCP App UI resources can be delivered to MCP clients, and hidden files are not a security boundary. Rely on tool exposure and permissions rather than file visibility for access control.
