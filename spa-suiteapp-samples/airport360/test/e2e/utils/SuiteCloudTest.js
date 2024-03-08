const { copyFolder, getUniqueFolder, createFolder, deleteFolder, getPath, getTempFolder } = require('./FileUtils');
const { executeCommand, processOutput } = require("./TestUtils");

module.exports = class SuiteCloudTest {

    constructor() {
        this.childProcess = null;
        this.actions = null;
        this.commandToRun = null;
        this.promise = null;
        this.timeout = null;

    }

    from(origin) {
        this.temporalProjectRoot = getUniqueFolder();
        this.originalProject = getPath(origin);
        return this;
    }

    command(command) {
        this.commandToRun = command;
        return this;
    }

    withActions(inputActions) {
        this.actions = inputActions;
        return this;
    }

    getExecutionFolder() {
        return this.temporalProjectRoot;
    }

    run(callback) {
        this.promise = deleteFolder(getTempFolder())
            .then(async() => createFolder(this.temporalProjectRoot))
            .then(() => { return copyFolder(this.originalProject, this.temporalProjectRoot); })
            .then((testingProjectFolder) => {
                this.childProcess = executeCommand(this.commandToRun, testingProjectFolder);
                return processOutput(this.childProcess, this.actions);
            })

            .then((data) => { callback(data); this.cleanUp() })
            .catch((error) => { return deleteFolder(this.temporalProjectRoot).finally(() => { return Promise.reject(error) }) })
            .finally(() => { return deleteFolder(this.temporalProjectRoot) })
        return this.promise;
    }

    cleanUp() {
        try {
            // closing all streams and killing the process. It will finish the promise
            if (this.childProcess) {
                this.childProcess.stdin.destroy();
                this.childProcess.stdout.destroy();
                this.childProcess.stderr.destroy();
                if (this.childProcess.disconnect) {
                    this.childProcess.disconnect();
                }
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            // Wait until we delete the folder AND the promise has ended
            return Promise.all([deleteFolder(this.temporalProjectRoot), this.promise]);
        }
    }
};
