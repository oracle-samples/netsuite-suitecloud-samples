/*
 ** Copyright (c) 2019 Oracle and/or its affiliates.  All rights reserved.
 ** Licensed under the Universal Permissive License v 1.0 as shown at https://oss.oracle.com/licenses/upl.
 */
'use strict';

const { mkdir, readdir, rm, copyFile, lstat } = require('fs').promises;
const path = require('path');
const fs = require('fs');

module.exports = {
	createFolder,
	deleteFolder,
	getUniqueFolder,
	copyFolder,
	getPath,
	getTempFolder,
	checkFileOrFolderPathExists,
	doesFileWithSpecifiedExtensionExistInThisFolder,
	fileExists
};

const uniqueID = (function () {
	let randomNumber = Math.floor(Math.random() * 100000); // Random number between 1 and 10000
	return function () {
		return (randomNumber++).toString();
	}; // Return and increment
})();

function createFolder(folderName) {
	return mkdir(folderName, { recursive: true });
}

function deleteFolder(folderPath) {
	return rm(folderPath, { recursive: true }).catch((reason) => {
		// return deleteFolder(folderPath);
	});
}

function getPath(dirtyPath) {
	return path.normalize(dirtyPath);
}

function getUniqueFolder() {
	return path.join(getTempFolder(), uniqueID());
}

function getTempFolder() {
	return path.join('temp');
}

function copyFolder(source, target) {
	let targetFolder = path.join(target, path.basename(source));

	return mkdir(targetFolder)
		.then(() => {
			return readdir(source);
		})
		.then((files) => {
			var promises = [];
			files.forEach((file) => {
				let curSource = path.join(source, file);
				promises.push(
					lstat(curSource).then((status) => {
						if (status.isDirectory()) {
							return copyFolder(curSource, targetFolder);
						} else {
							return copyFile(curSource, path.join(targetFolder, path.basename(curSource)));
						}
					})
				);
			});
			return Promise.all(promises);
		})
		.then(() => {
			return targetFolder;
		});
}

function fileExists(filePath) {
	return fs.existsSync(filePath);
}

// Good to search if a path exists. Could be file or folder.
function checkFileOrFolderPathExists(fileOrFolderPath) {
	try {
		return fs.existsSync(fileOrFolderPath)
	} catch (err) {
		console.error(err);
		return false;
	}
}

// Good to search if a file with an extension exists in a folder. For example '.zip' in 'out' folder.
function doesFileWithSpecifiedExtensionExistInThisFolder(folderPath, fileExtension) {
	try {
		const folderfiles = fs.readdirSync(folderPath);
		const filePathsWithExtension = folderfiles.filter((file) => file.endsWith(fileExtension)).map((file) => path.resolve(folderPath, file));
		return filePathsWithExtension.length > 0
	} catch (err) {
		console.log(err);
		return false;
	}
}
