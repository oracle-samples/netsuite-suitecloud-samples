import * as os from "os";

import {mkdir, writeFile} from "fs/promises";
import * as path from "path";
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
import * as puppeteer from "puppeteer"

module.exports = async () => {
    const browser = await puppeteer.launch({args:["--ignore-certificate-errors"], slowMo:50});
    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    globalThis.__BROWSER_GLOBAL__ = browser;

    // use the file system to expose the wsEndpoint for TestEnvironments
    await mkdir(DIR, {recursive: true});
    await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
