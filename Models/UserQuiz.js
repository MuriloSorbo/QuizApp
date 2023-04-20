class UserQuiz {
  constructor(name, status, score) {
    this.name = name;
    this.status = status;
    this.score = score;
  }

  change(status, score) {
    this.status = status;
    this.score = score;
  }
}

module.exports = UserQuiz;
