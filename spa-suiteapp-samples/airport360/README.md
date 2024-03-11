# Airport 360 - Sample Single Page Application (SPA) SuiteApp

This sample SPA SuiteApp demonstrates a working example of a 360-type SuiteApp. It shows a complete example that uses various NetSuite UI Framework (UIF) features such as routing, side menu, state management, asynchronous loading, and SuiteScript APIs.

The Airport 360 SuiteApp features a `Dashboard` page that provides information about the next departing flights, and informs you about closed gates and unassigned flights. Flights without assigned gates are highlighted on the list, so you can easily see which ones require action. 

From the dashboard, you can go to the `Flights` page to see the complete list of flights, to the `Gates` page to see and manage the status of each gate, or to individual flight pages to see more information about each flight.

You can assign or change the gate for a specific flight from the list on the `Flights` page or on the individual flight details page. You can change the status of a specific gate from the list on the `Gates` page. Individual flight pages show the complete details of each flight, including the flight map.

## Installation
+ `npm i` to install required dependencies
+ `suitecloud account:setup` to set up the account where the app is to be deployed; or for local setup, add `-d` to use NetSuite domain
+ `npm run build` to build the project inside a new `build` directory
+ `npm run deploy` to bundle the built app into the `FileCabinet` folder and deploy it into the configured account

For more information, see also [SPA Build Setup](../README.md#build-setup) and [SPA SuiteApp Deployment](../README.md#suiteapp-deployment).

## Application Structure

SPA SuiteApps have the following structure:
- `/src/SuiteApps` contains the sources of the SuiteApp and the `assets` folder for static assets.
- `/test` contains unit and end-to-end tests that you can run using using different npm tasks.
- `/types` contains TypeScript type declarations that will provide you with code completion for NetSuite UIF classes.
- `/src/manifest.xml`, `/src/deploy.xml`, and `/src/Objects/custspa_xxx.xml` contain the configuration of the SuiteApp.
- `/build` contains the source files processed by the TypeScript compiler after running the `npm run build` task. The files can be cleaned by running the `npm run clean` task.
- `/src/FileCabinet/SuiteApps` contains the bundled and minified sources that are pushed to NetSuite. The files are generated by running `npm run bundle` and cleaned by running `npm run clean`.
- `/gulpfile.js` is a command line interface that provides the `build`, `bundle`, and `clean` npm tasks. It is possible to configure the source concatenation and minification here using the `concatenateScripts` and `minifyScripts` variables.

## Application Entry Point

The entry point for the frontend part of the application is the `SpaClient.ts` file. It has to export a `run` function that bootstraps the application by setting the layout and providing the content.

The default layout is a scrolling layout. To achieve a layout that fills the entire viewport use the `application` layout value.

The content of an application can be any type of NetSuite UIF component - `functional`, `PureComponent`, or the legacy `Component` type. 

### Code Linting

We suggest to use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code linting and
formatting. Configuration files are included in this sample app (`.eslintrc` and `.prettierrc`), and npm scripts to inspect and fix issues are prepared in the `package.json` file - look for `inspect` and `lint` scripts.

## Testing

Testing is carried out using [Jest](https://jestjs.io/) for both unit and e2e (end-to-end) testing. It also uses [Puppeteer](https://pptr.dev/) for mocking a browser in e2e tests.

You can run unit tests out of the box. Before you start with e2e tests, you need to configure some of the files in the `/test` folder first:

1. Ensure you have set up an account using `suitecloud account:setup` and have a valid authentication ID.
2. Modify the URL specified in `e2e/jest.config.json` to match the URL of your NetSuite account.
3. Look for the `.suitecloud-sdk` folder located in your root folder by default.
4. Copy the credentials from `.suitecloud-sdk/credentials` to `e2e/setup/credentials`. You can either copy the contents of the credentials file or simply replace the file.
5. Check that the `COMPANY_ID` in `e2e/constants/credential.ts` is correct.
6. Run `npm run test_e2e` for end-to-end tests and `npm run test_unit` for unit tests, or run `npm run test` for both.