const express = require('express');
const path = require('path');

const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Login/index.html'));
});

Router.post('/', (req, res) => {
  const name = req.body.name;

  if (!name) {
    res.redirect('/login');
    return;
  }

  req.session.authenticated = true;
  req.session.curQuestion = -1;
  req.session.score = 0;
  req.session.name = name;

  if (SrcReader.getSrc().mainPass == name) {
    res.redirect('/main');
  } else res.redirect('/waiting');
});

module.exports = Router;
