const path = require('path');
const { execSync, spawn } = require('child_process');
const { ENTER, DOWN } = require('./KeyMap');

const SCLOUD = 'scloud';
const UTF8 = 'utf8';
const ANSI_REGEX_EXPRESSION = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
const SPECIAL_CHARS = {
	CHECK_MARK: '\u2714',
	X_MARK: '\u2716',
};

module.exports = {
	processOutput,
	executeCommand,
	executeInteractiveCLICommand,
	executeShellCommand,
	executeShellCommandPipe,
	selectAuthIDFromAccountSetupCLICommand,
	SPECIAL_CHARS
};

function processOutput(childProcess, actions) {
	return new Promise((resolve, reject) => {
		let expected = actions ? actions.shift() : null;
		let output = '';

		// When we have something in the output, we answer it if we're expecting to answer.
		// If we don't expect to answer, the validation has ended
		childProcess.stdout.on('data', (data) => {
			const message = data.toString(UTF8);
			output += message;
			if (expected) {
				if (message.includes(expected.prompt)) {
					if (expected.keyBindings && expected.keyBindings.length > 0) {
						expected.keyBindings.forEach((element) => {
							childProcess.stdin.write(element);
						});
					} else if (expected.answer && expected.answer.length > 0) {
						childProcess.stdin.write(expected.answer + ENTER);
					} else {
						// expected and message match, but not answer available
						resolve(cleanOutput(output));
					}
					expected = actions.length > 0 ? actions.shift() : null;
				}
			}
		});

		// When error, we reject the promise
		childProcess.stderr.on('data', (data) => {
			reject(data.toString(UTF8));
		});

		// When the process ends and all stdios are closed, we resolve the promise
		childProcess.on('close', () => resolve(cleanOutput(output)));
	});
}

function cleanOutput(output) {
	return output.replace(ANSI_REGEX_EXPRESSION, '').trim().split(/\r?\n/);
}

function executeCommand(scloudCommand, testProject) {
	const cliCommandString = `${SCLOUD} ${scloudCommand}`;
	const project = path.resolve(process.cwd(), testProject);

	return spawn(cliCommandString, [], { shell: true, cwd: project });
}

/**
 * @typedef Action
 * @type {object}
 * @property {string} prompt - Expected prompt string
 * @property {string} [answer] - Answer to input
 * @property {string[]} [keyBindings] - array of key strokes
 *
 * @param {string} commandString CLI command to be executed
 * @param {string} executeFromFolder path to the folder to execute the command from
 * @param {Array<Action>} actionsToExecute actions to be performed interactively
 * @returns {Promise<string[]>} Ouptut of the command execution
 */
function executeInteractiveCLICommand(commandString, executeFromFolder, actionsToExecute) {
	const childProcess = spawn(commandString, { shell: true, cwd: executeFromFolder });
	return processOutput(childProcess, actionsToExecute);
}

/**
 *
 * @param {string} authID auhtID to select from scloud account:setup
 * @param {string} executeFromFolder path to the suitecloud project root
 * @returns {Promise<string[]>} Output of the scloud account:setup execution
 */
function selectAuthIDFromAccountSetupCLICommand(authID, executeFromFolder) {
	const childProcess = spawn('scloud account:setup', { shell: true, cwd: executeFromFolder });
	return processAccountSetupOutput(childProcess, authID);
}

function processAccountSetupOutput(childProcess, authID) {
	const selectAuthIDMessage = 'Select or create an authentication ID (authID, a custom alias you give';
	const firstSelectedOptionUnix = '❯ Create a new authentication ID (authID).';
	const firstSelectedOptionWindows = '> Create a new authentication ID (authID).';
	const desiredAuthIDSelectedUnix = `❯ ${authID} |`;
	const desiredAuthIDSelectedWindows = `> ${authID} |`;
	let firstIteration = true;
	
	return new Promise((resolve, reject) => {
		let output = '';

		// When we have something in the output, we try to find selectAuthIDMessage
		// We go DOWN until authID is found or reject when firstSelectedOption appears again
		childProcess.stdout.on('data', (data) => {
			const message = data.toString(UTF8);
			output += message;

			if (message.includes(desiredAuthIDSelectedUnix) || message.includes(desiredAuthIDSelectedWindows)) {
				// the authID has been found, let's select it with ENTER
				childProcess.stdin.write(ENTER);
				return;
			}

			if (message.includes(selectAuthIDMessage)) {
				if ((message.includes(firstSelectedOptionUnix) || message.includes(firstSelectedOptionWindows)) && !firstIteration) {
					// emiting an error event to reject from there
					childProcess.emit('error', Error(`Provided authID: ${authID} not found.`));
					return;
				}
				if ((message.includes(firstSelectedOptionUnix) || message.includes(firstSelectedOptionWindows)) && firstIteration) {
					firstIteration = false;
				}
				// moving DOWN will generate a new data on the output
				childProcess.stdin.write(DOWN);
			}
		});

		// When data on stderr, we reject the promise
		childProcess.stderr.on('data', (data) => {
			childProcess.kill();
			reject(data.toString(UTF8));
		});

		// When error, we reject the promise
		childProcess.on('error', (error) => {
			childProcess.kill();
			reject(error);
		});

		// When the process ends and all stdios are closed, we resolve the promise
		childProcess.on('close', () => resolve(cleanOutput(output)));
	});
}

/**
 *
 * Executes the command and pipes the output to the parent shell automatically
 * @param {string} shellCommandString command to be executed
 * @param {string} executeFromFolder path to the folder to execute the command from
 * @returns null because the output of the command is shown in the parent process output.
 */
function executeShellCommand(shellCommandString, executeFromFolder) {
	return execSync(shellCommandString, { stdio: 'inherit', cwd: executeFromFolder });
}

/**
 *
 * Excutes the command and is able check the error.stdout.toString() on the catched error.
 * @param {string} shellCommandString command to be executed
 * @param {string} executeFromFolder path to the folder to execute the command from
 * @returns {string} the output of the command
 */
function executeShellCommandPipe(shellCommandString, executeFromFolder) {
	// execSync option 'env: { FORCE_COLOR: 1}' works good in windows to have a colored output
	// but it's incompatible with the ns-oracle-linux used in TC
	return execSync(shellCommandString, { stdio: 'pipe', cwd: executeFromFolder, encoding: 'utf8'});
}
