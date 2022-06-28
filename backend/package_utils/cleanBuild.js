/**
 * Erases the build dir... Because rimraf or other gave problems in Windows environments.
 */
const fs = require('fs');
const path = require('path');

const FOLDER_TO_EMPTY = './build';

/**
 * Deletes the folder specified and all its content.
 * @param dirPath Path of the directory to delete.
 */
const emptyFolder = function emptyFolder(dirPath) {
  const dirName = dirPath.split(path.sep).pop();
  if (dirName === 'public') {
    return;
  }
  if (!fs.existsSync(dirPath) || !fs.lstatSync(dirPath).isDirectory()) {
    return;
  }
  fs.readdirSync(dirPath).forEach((file) => {
    const curPath = path.join(dirPath, file);
    if (fs.lstatSync(curPath).isDirectory()) {
      emptyFolder(curPath);
    } else {
      fs.unlinkSync(curPath);
    }
  });
  fs.rmdirSync(dirPath);
};

console.log(`Emptying folder "${FOLDER_TO_EMPTY}"...`);
emptyFolder(FOLDER_TO_EMPTY);
console.log('Folder emptied.');
