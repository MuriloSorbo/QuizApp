const express = require('express');

const UserQuiz = require('../Models/UserQuiz');
const checkAuthenticated = require('../checkAuthenticated');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.post('/', checkAuthenticated, (req, res) => {
  if (SrcReader.nextQuestion() == SrcReader.getSrc().questions.length) {
    // Fim de jogo
    return;
  }

  res.status(200).send();
});

Router.get('/', (req, res) => {
  const name = req.session.name;

  const compareUser = new UserQuiz(name, undefined, undefined, undefined);
  const user = SrcReader.getUser(compareUser);

  if (user && user.curQuestion < SrcReader.getCurQuestion()) {
    console.log('ok');
    res
      .status(200)
      .send(
        JSON.parse(
          JSON.stringify(
            SrcReader.getSrc().questions[SrcReader.getCurQuestion()]
          )
        )
      );

    user.update('Respondendo', user.score, SrcReader.getCurQuestion());
  } else {
    res.status(401).send();
  }
});

module.exports = Router;