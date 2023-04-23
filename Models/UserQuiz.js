class UserQuiz {
  constructor(name, status, score, curQuestion) {
    this.name = name;
    this.status = status;
    this.score = score;
    this.curQuestion = curQuestion;
  }

  update(status, score, curQuestion) {
    this.status = status;
    this.score = score;
    this.curQuestion = curQuestion;
  }
}

module.exports = UserQuiz;
