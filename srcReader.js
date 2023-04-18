const fs = require('fs');

class SrcReader {
  static #src;
  static #started;

  static init() {
    try {
      const fileData = fs.readFileSync('./src.json');
      this.#src = JSON.parse(fileData);
    } catch {
      this.#src = undefined;
    }

    this.#started = false;
  }

  static getSrc() {
    return this.#src;
  }

  static getStarted() {
    return this.#started;
  }

  static Start() {
    this.#started = true;
  }

}

module.exports = SrcReader;
