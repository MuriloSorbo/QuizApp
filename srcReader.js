const fs = require('fs');

class SrcReader {
  static #src;

  static init() {
    try {
      const fileData = fs.readFileSync('./src.json');
      this.#src = JSON.parse(fileData);
    } catch {
      this.#src = undefined;
    }
  }

  static getSrc() {
    return this.#src;
  }
}

module.exports = SrcReader;
