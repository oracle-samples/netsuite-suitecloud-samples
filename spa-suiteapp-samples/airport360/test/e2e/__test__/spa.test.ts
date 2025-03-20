import {expect, it, describe, beforeAll} from '@jest/globals';
import {executeShellCommandPipe} from '../utils/TestUtils';
import {getPath} from '../utils/FileUtils';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import recordId from '../constants/record/recordId';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resolve from '../actions/resolve';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import credential from '../constants/credential';

describe('SPA SuiteApp', () => {
	let page;
	const suiteAppName = 'com.netsuite.airport360';
	const SPA = 'airport#';
	const TEST_TIMEOUT = 50000;
	beforeAll(async () => {
		page = await globalThis.__BROWSER_GLOBAL__.newPage();
		await page.goto(resolve.loginCompanyRole(recordId.login._ADMINISTRATOR, credential.COMPANY_ID));
		// login
		await page.type('#email', credential.USERNAME);
		await page.type('#password', credential.PASSWORD);
		await page.click('#login-submit');
	}, TEST_TIMEOUT);

	it(
		'should build the application successfully',
		async () => {
			const commandOutput = executeShellCommandPipe('npm run build', getPath('./'));
			expect(commandOutput).toEqual(expect.stringContaining("Finished 'build' after"));
		},
		TEST_TIMEOUT
	);

	it(
		'should deploy the application successfully',
		async () => {
			const commandOutput = executeShellCommandPipe('npm run deploy', getPath('./src/'));
			expect(commandOutput).toEqual(expect.stringContaining('Installation COMPLETE'));
		},
		TEST_TIMEOUT
	);
	it(
		'view dashboard page',
		async () => {
			await page.goto(resolve.viewSPA('com.netsuite.airport360', 'airport#', ''));
			await page.waitForNetworkIdle();
			const flights = await page.$eval('body > div:last-of-type', (el) => el.textContent);
			expect(flights).toEqual(expect.stringContaining('Airport 360Flight & Gate Dashboard'));
		},
		TEST_TIMEOUT
	);

	it(
		'view flights page ',
		async () => {
			await page.goto(resolve.viewSPA(suiteAppName, SPA, 'flights'));
			const flights = await page.$eval('body > div:last-of-type', (el) => el.textContent);
			expect(flights).toEqual(expect.stringContaining('DashboardFlightsGatesFlights'));
		},
		TEST_TIMEOUT
	);

	it(
		'view gates page ',
		async () => {
			await page.goto(resolve.viewSPA(suiteAppName, SPA, 'gates'));
			const gates = await page.$eval('body > div:last-of-type', (el) => el.textContent);
			expect(gates).toEqual(expect.stringContaining('DashboardFlightsGatesGates'));
		},
		TEST_TIMEOUT
	);

	it(
		'view individual flight details page',
		async () => {
			await page.goto(resolve.viewSPA('com.netsuite.airport360', 'airport#', 'flights/1'));
			const details = await page.$eval('body > div:last-of-type', (el) => el.textContent);
			expect(details).toEqual(expect.stringContaining('Flight 1BackOriginBarcelona - BCN'));
		},
		TEST_TIMEOUT
	);
});
