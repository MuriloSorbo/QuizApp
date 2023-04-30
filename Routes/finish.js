const express = require('express');
const path = require('path');

const checkAuthenticated = require('../checkAuthenticated');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  if (SrcReader.getCurQuestion() != SrcReader.getSrc().questions.length) {
    res.status(401).send();
    return;
  }

  res.sendFile(path.join(__dirname, '../Pages/Finish/index.html'));
});

module.exports = Router;
