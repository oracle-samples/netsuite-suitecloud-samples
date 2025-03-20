import * as os from "os";
import * as path from "path";
import * as fs from "fs";

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function (globalConfig, projectConfig) {
	// close the browser instance
	await globalThis.__BROWSER_GLOBAL__.close();

	// clean-up the wsEndpoint file
	await fs.rm(DIR, {"recursive": true, "force": true}, (err) => {
		if(err){
			// File deletion failed
			console.error(err.message);
			return;
		}
	});
};
