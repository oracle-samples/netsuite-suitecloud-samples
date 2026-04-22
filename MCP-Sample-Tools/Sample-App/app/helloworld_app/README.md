# Hello World MCP App UI

This project contains the source UI for the `helloworld_app` MCP App used by the [Hello World - MCP App Sample](/MCP-Sample-Tools/Sample-App/README.md). It is provided as a reference implementation for the app UI and build process.

To build your own UI, you can use the [@modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps/) SDK, which provides tools and an App class to facilitate communication between your UI and the AI client. For more guidance and usage examples, see the [Model Context Protocol documentation for Building an MCP App](https://modelcontextprotocol.io/extensions/apps/build).

## Build the UI

From the project root:

```bash
npm install
npm run helloworld_app
```

Or from this directory:
```bash
npm run build
```

## HTML Output

The build generates the bundled HTML artifact at: `app/helloworld_app/dist/mcp-app.html`.

## Project Integration

The bundled `mcp-app.html` file is copied into the account customization project (ACP) at: `src/FileCabinet/SuiteScripts/helloworld_app/mcp-app.html`, and is referenced in the tool schema by using `_meta.ui.resourceUri`.

The custom tool script and JSON schema are in this folder: `src/FileCabinet/SuiteScripts/helloworld_app/`.

The `toolset` SDF object definition is in: `src/Objects/custtoolset_helloworld_app.xml`.

Only the bundled HTML artifact is needed in the deployed ACP. This source UI project is included for reference and rebuilds.
