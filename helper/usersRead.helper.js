const fs = require('fs');
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);

async function usersRead(path) {
    const content = await readFilePromise(path);
    return JSON.parse(content.toString());
}

module.exports = usersRead;