const express = require('express');
const path = require('path');

const SrcReader = require('../SrcReader');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  if (SrcReader.getStarted()) {
    res.sendFile(path.join(__dirname, '../Pages/Quiz/index.html'));
    return;
  }

  res.status(401).send();
});

module.exports = Router;
