const fs = require('fs');

function read() {
  try {
    const fileData = fs.readFileSync('./src.json');
    return JSON.parse(fileData);
  } catch {
    return undefined;
  }
}

module.exports = { read };
