const fs = require('fs');

class SrcReader {
  static #src;
  static #curQuestion;

  static init() {
    this.#curQuestion = -1;
    this.users = [];

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

  static getUser(compareUser) {
    let outUser = undefined;

    this.users.forEach((user) => {
      if (compareUser.name == user.name) outUser = user;
    });

    return outUser;
  }
}

module.exports = SrcReader;
