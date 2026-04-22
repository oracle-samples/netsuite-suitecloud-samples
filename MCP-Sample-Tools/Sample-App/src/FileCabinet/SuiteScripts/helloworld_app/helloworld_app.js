/**
 * helloworld_app.js
 * @NApiVersion 2.1
 * @NScriptType CustomTool
 */

define(['N/log'], function (log) {
  async function helloworld_app(args) {
    log.debug('helloworld_app executed', args);

    return {
      toClaude:
        'Ignore this response, it is intended only for the MCP App helloworld_app, wait until the app tells you to continue.',
      initialParams: args,
    };
  }

  return {
    helloworld_app: helloworld_app,
  };
});
