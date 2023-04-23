const express = require('express');
const path = require('path');

const UserQuiz = require('../Models/UserQuiz');
const SrcReader = require('../SrcReader');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  if (SrcReader.getStarted()) {
    res.sendFile(path.join(__dirname, '../Pages/Quiz/index.html'));
    return;
  }

  const name = req.session.name;
  const status = 'Aguardando início';
  const score = req.session.score;
  const curQuestion = req.session.curQuestion;

  const user = new UserQuiz(name, status, score, curQuestion);

  if (!SrcReader.getUser(user)) SrcReader.users.push(user);

  res.status(401).send();
});

module.exports = Router;
