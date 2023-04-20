const fs = require('fs');

class SrcReader {
  static #src;
  static #curQuestion;

  static init() {
    this.#curQuestion = -1;

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

  static getStarted() {
    return this.#curQuestion != -1;
  }

  static nextQuestion() {
    return ++this.#curQuestion >= this.#src.questions.length
      ? this.#src.questions.length
      : this.#curQuestion;
  }
}

module.exports = SrcReader;
