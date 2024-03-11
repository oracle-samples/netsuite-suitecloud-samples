import * as os from "os";
import {rm} from "fs/promises";
import * as path from "path";
import * as fs from "fs";


const HOME_PATH =  os.homedir();
const suitecloudFolder = `.suitecloud-sdk`;
const suitecloudCredentials = `credentials`;

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

module.exports = async function (globalConfig, projectConfig) {
	// console.log('\n---   initiating jest globalTeardown   ---');
	
	// remove credentials file
//	await rm(path.join(HOME_PATH, suitecloudFolder, suitecloudCredentials))

	// close the browser instance
	await globalThis.__BROWSER_GLOBAL__.close();

	// clean-up the wsEndpoint file
	await fs.rm(DIR, {"recursive": true, "force": true}, (err) => {
		if(err){
			// File deletion failed
			console.error(err.message);
			return;
		}
		console.log("File deleted successfully");

	});
};
