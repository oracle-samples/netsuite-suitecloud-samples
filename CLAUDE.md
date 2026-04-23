# CLAUDE.md - AI Assistant Guide for NetSuite SuiteCloud Samples

## Repository Overview

This repository contains sample projects demonstrating NetSuite's SuiteCloud platform customization capabilities. Each folder is an independent SuiteCloud project (either Account Customization Project or SuiteApp) with its own README.md file.

**Technology Stack:** SuiteScript 2.1, TypeScript/JavaScript, NetSuite SDF, Jest for testing

## Directory Structure

```
netsuite-suitecloud-samples/
├── MCP-Sample-Tools/          # AI Connector Service (MCP) custom tool samples
├── spa-suiteapp-samples/      # Single Page Application SuiteApps (UIF/React-like)
├── suitecloud-legacy-solutions-catalog/  # Traditional SuiteScript samples
├── suiteworld-samples/        # Conference presentation samples
├── samples-catalog.json       # Machine-readable catalog of all samples
└── README.md
```

## Project Types

### 1. MCP-Sample-Tools
Custom tools for the NetSuite AI Connector Service using Model Context Protocol (MCP).

**Structure:**
```
MCP-Sample-Tools/
├── src/
│   ├── FileCabinet/SuiteScripts/   # Custom tool scripts (*_acp.js) and schemas (*_schema_acp.json)
│   ├── Objects/                     # SDF custom tool XML definitions (customtool_*.xml)
│   ├── manifest.xml                 # Project manifest
│   └── deploy.xml                   # Deployment configuration
├── __tests__/                       # Jest unit tests
└── package.json
```

**Script Type:** `@NScriptType CustomTool`

### 2. SPA SuiteApp Samples (spa-suiteapp-samples/)
Single Page Applications using NetSuite User Interface Framework (UIF).

**Samples (by difficulty):**
- **Beginner:** helloworld-js, helloworld-ts, item360
- **Intermediate:** basics-routing, basics-state-management
- **Advanced:** airport360

**Structure:**
```
{spa-app}/
├── src/
│   ├── SuiteApps/{ApplicationID}/{SpaFolder}/  # TSX/TS source files
│   ├── FileCabinet/SuiteApps/...               # Transpiled output (auto-generated)
│   ├── Objects/                                 # SDF object definitions (custspa_*.xml)
│   ├── manifest.xml
│   └── deploy.xml
├── test/                                        # Unit and E2E tests
├── gulpfile.mjs                                 # Build configuration
└── package.json
```

**Build Commands:**
```bash
npm install
npm run build    # TypeScript compilation
npm run bundle   # Bundle and minify for deployment
npm run deploy   # Bundle + deploy to NetSuite
npm run lint     # Run ESLint + Prettier fixes
npm run test     # Run unit and E2E tests
```

### 3. Legacy Solutions Catalog (suitecloud-legacy-solutions-catalog/)
Traditional SuiteScript samples for common customization patterns.

**Structure (per sample):**
```
{sample-name}/
├── src/
│   ├── FileCabinet/SuiteScripts/   # SuiteScript files
│   ├── Objects/                     # SDF script/deployment definitions
│   ├── manifest.xml
│   └── deploy.xml
├── __tests__/                       # Jest unit tests
├── eslint.config.mjs
├── jest.config.js
├── suitecloud.config.js
└── package.json
```

**Test Command:**
```bash
npm test   # Runs Jest with coverage
```

### 4. SuiteWorld Samples (suiteworld-samples/)
Conference presentation samples. These are **not fully maintained** and provided as-is.

## SuiteScript Conventions

### File Naming Prefixes
Scripts use prefixes indicating their type:
- `cs_` - Client Script
- `ue_` - User Event Script
- `sl_` - Suitelet Script
- `rs_` - RESTlet Script
- `mr_` / `create.js`, `update.js`, etc. - Map/Reduce Script
- `wf_` - Workflow Action Script
- `*_acp.js` - Custom Tool Script (MCP)

### Script Header Annotations
```javascript
/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript    // or ClientScript, MapReduceScript, etc.
 * @NModuleScope SameAccount
 */
```

### Module Definition Pattern
SuiteScript 2.1 uses AMD-style `define()`:
```javascript
define(['N/record', 'N/log'], (record, log) => {
  function afterSubmit(scriptContext) {
    // Implementation
  }

  return {
    afterSubmit: afterSubmit
  }
})
```

### Common NetSuite Modules
- `N/record` - Create, load, update, delete records
- `N/search` - Saved searches
- `N/query` - SuiteQL queries
- `N/log` - Server-side logging
- `N/runtime` - Script/user context
- `N/currentRecord` - Client-side current record access
- `N/ui/serverWidget` - Server-side UI building
- `N/llm` - AI/LLM integration (newer feature)

## Testing Patterns

### Jest Configuration
Uses `@oracle/suitecloud-unit-testing` package:

```javascript
// jest.config.js
const SuiteCloudJestConfiguration = require('@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration')
const cliConfig = require('./suitecloud.config')

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: cliConfig.defaultProjectFolder,
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP  // or SUITEAPP
})
```

### Test File Structure
```javascript
import script from '../src/FileCabinet/SuiteScripts/ue_example'
import record from 'N/record'
import Record from 'N/record/instance'

jest.mock('N/record')
jest.mock('N/record/instance')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Script Test', () => {
  it('Should do something', () => {
    // given - setup mocks
    // when - call script function
    // then - assertions
  })
})
```

## Code Style

### ESLint Configuration
Legacy samples use `eslint.config.mjs` with neostandard:
- 2-space indentation
- Single quotes
- Max line length: 80 characters
- `prefer-const`, `no-var`
- JSDoc recommended

### Prettier Configuration
SPA samples include Prettier for formatting.

## Deployment

### Prerequisites
1. NetSuite account with enabled features:
   - Server SuiteScript / Client SuiteScript
   - Token-based Authentication
   - OAuth 2.0
   - SuiteCloud Development Framework

2. SuiteCloud CLI installed:
   ```bash
   npm i -g @oracle/suitecloud-cli
   ```

3. Account setup:
   ```bash
   suitecloud account:setup
   ```

### Deploy Commands
```bash
# Standard project
suitecloud project:deploy

# SPA with build
npm run deploy
```

## Key Files Reference

| File | Purpose |
|------|---------|
| `manifest.xml` | Project configuration and feature dependencies |
| `deploy.xml` | Objects to deploy |
| `suitecloud.config.js` | SuiteCloud CLI configuration |
| `*_schema_acp.json` | MCP tool action schemas |
| `customtool_*.xml` | MCP tool SDF object definitions |
| `custspa_*.xml` | SPA SDF object definitions |

## Working with This Repository

### When Adding a New Sample
1. Create project folder with standard SDF structure
2. Include `README.md` with use case description
3. Add `package.json` with test script
4. Include `__tests__/` directory with unit tests
5. Update `samples-catalog.json` if applicable

### When Modifying Scripts
1. Follow existing naming conventions
2. Use SuiteScript 2.1 syntax
3. Include JSDoc comments for entry point functions
4. Add/update corresponding unit tests
5. Run `npm test` to verify changes
6. Run linting if available (`npm run lint`)

### Important Notes
- Each sample folder is **independent** - install dependencies per project
- SuiteWorld samples are **not maintained** - use as reference only
- Test deployments on sandbox/trial accounts first
- Script deployments default to Testing mode
