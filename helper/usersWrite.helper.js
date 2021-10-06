const fs = require('fs');

const util = require('util');

const writeFilePromise = util.promisify(fs.writeFile);

async function usersWrite(path, data) {
    await writeFilePromise(path, data);
}

module.exports = usersWrite;