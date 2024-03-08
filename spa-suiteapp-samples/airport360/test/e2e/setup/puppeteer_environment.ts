import * as path from "path";
import * as os from "os";
import {readFile} from "fs/promises";
import * as puppeteer from "puppeteer"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeEnvironment = require("jest-environment-node");


const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

class PuppeteerEnvironment extends NodeEnvironment {
    private global: any;
    constructor(config) {
        super(config);
    }

    async setup() {
        await super.setup();
        // get the wsEndpoint
        const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');
        if (!wsEndpoint) {
            throw new Error('wsEndpoint not found');
        }

        // connect to puppeteer
        this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({
            browserWSEndpoint: wsEndpoint,
        });
    }

    async teardown() {
        if (this.global.__BROWSER_GLOBAL__) {
            this.global.__BROWSER_GLOBAL__.disconnect();
        }
        await super.teardown();
    }

    getVmContext() {
        return super.getVmContext();
    }
}

module.exports = PuppeteerEnvironment;