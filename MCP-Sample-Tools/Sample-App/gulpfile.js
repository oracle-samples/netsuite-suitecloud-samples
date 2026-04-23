const gulp = require('gulp');
const { spawn } = require('node:child_process');
const fs = require('node:fs/promises');
const path = require('node:path');

const submodules = require('./build/submodules.config');

const truthyValues = new Set(['1', 'true', 'yes', 'y', 'on']);
const falsyValues = new Set(['0', 'false', 'no', 'n', 'off']);

function resolveToggle(toggleValue, defaultEnabled = true) {
  if (toggleValue === undefined || toggleValue === null) {
    return defaultEnabled;
  }

  const normalized = String(toggleValue).trim().toLowerCase();
  if (truthyValues.has(normalized)) {
    return true;
  }
  if (falsyValues.has(normalized)) {
    return false;
  }
  return defaultEnabled;
}

function isSubmoduleEnabled(submodule) {
  const { toggleEnvVar, defaultEnabled = true } = submodule;
  if (!toggleEnvVar) {
    return defaultEnabled;
  }
  return resolveToggle(process.env[toggleEnvVar], defaultEnabled);
}

function runCommand(command, args = [], options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: process.platform === 'win32',
      ...options,
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(
          new Error(
            `${command} ${args.join(' ')} exited with code ${code} (cwd: ${options.cwd ?? process.cwd()})`,
          ),
        );
      }
    });
  });
}

async function copyArtifacts(artifacts) {
  for (const artifact of artifacts) {
    const { source, destination } = artifact;
    try {
      await fs.access(source);
    } catch (err) {
      throw new Error(`Artifact not found at ${source}. Did the submodule build generate it?`);
    }

    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.copyFile(source, destination);
  }
}

async function buildSubmodule(submodule) {
  const { name, cwd, build, artifacts = [] } = submodule;
  console.info(`\n[build] Starting submodule: ${name}`);

  if (build && build.command) {
    const env = { ...process.env, ...(build.env || {}) };
    await runCommand(build.command, build.args ?? [], { cwd, env });
  }

  if (artifacts.length > 0) {
    await copyArtifacts(artifacts);
    console.info(`[build] Copied ${artifacts.length} artifact(s) for ${name}`);
  }

  console.info(`[build] Finished submodule: ${name}`);
}

async function buildEnabledSubmodules() {
  const enabledSubmodules = submodules.filter(isSubmoduleEnabled);

  if (enabledSubmodules.length === 0) {
    console.info('[build] No submodules enabled. Nothing to do.');
    return;
  }

  console.info(
    `[build] Enabled submodules: ${enabledSubmodules.map((submodule) => submodule.name).join(', ')}`,
  );

  for (const submodule of enabledSubmodules) {
    await buildSubmodule(submodule);
  }
}

exports['build:submodules'] = buildEnabledSubmodules;
exports.build = gulp.series(buildEnabledSubmodules);
exports.default = exports.build;
