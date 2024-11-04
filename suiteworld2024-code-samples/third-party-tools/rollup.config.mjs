import terser from "@rollup/plugin-terser";

function createBanner(scriptType) {
  return `/**!
  * @NApiVersion 2.1
  * @NScriptType ${scriptType}
  */`;
}

export default [
  {
    input: "build/com.netsuite.playground/customscript_suitelet.js",
    output: {
      file: "src/FileCabinet/SuiteApps/com.netsuite.playground/customscript_suitelet.js",
      banner: createBanner("Suitelet"),
      format: "amd",
      plugins: [terser()],
    },
  },
  {
    input: "build/com.netsuite.playground/customscript_restlet.js",
    output: {
      file: "src/FileCabinet/SuiteApps/com.netsuite.playground/customscript_restlet.js",
      banner: createBanner("Restlet"),
      format: "amd",
      plugins: [terser()],
    },
  },
];
