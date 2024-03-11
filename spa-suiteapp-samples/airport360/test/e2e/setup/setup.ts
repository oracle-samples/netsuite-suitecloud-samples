import * as os from "os";

import {access, copyFile, mkdir, writeFile} from "fs/promises";
import * as path from "path";
const suitecloudSdkFolder = `.suitecloud-sdk`;
const suitecloudCredentials = `credentials`;
const suitecloudSdkSettings = `suitecloud-sdk-settings.json`;
const settingsSrc = `./test/e2e/setup/${suitecloudSdkSettings}`;
const credentialsSrc = `./test/e2e/setup/${suitecloudCredentials}`;
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const HOME_PATH = os.homedir();
import * as puppeteer from "puppeteer"

module.exports = async () => {
    const browser = await puppeteer.launch({headless: false, ignoreHTTPSErrors: true, slowMo: 250});
    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    globalThis.__BROWSER_GLOBAL__ = browser;

    // use the file system to expose the wsEndpoint for TestEnvironments
    await mkdir(DIR, {recursive: true});
    await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
    console.log('\n---   initiating jest globalSetup   ---');
    try {
        await mkdir(path.join(HOME_PATH, suitecloudSdkFolder))
    } catch (ex) {
        console.log(`Can't create "${suitecloudSdkFolder}" folder. Maybe it's already created. Continuing...`);
    }

    try {
        await access(settingsSrc);
        await copyFile(settingsSrc, path.join(HOME_PATH, suitecloudSdkFolder, suitecloudSdkSettings));
    } catch (e) {
        console.log(`File "${settingsSrc}" not present. Testing without default configuration...`);
    }

    // copy credentials file and return
    return await copyFile(credentialsSrc, path.join(HOME_PATH, suitecloudSdkFolder, suitecloudCredentials));

}
