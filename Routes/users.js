const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  if (!req.session.name == SrcReader.getSrc().mainPass) {
    res.redirect('/login');
    return;
  }

  res.send(JSON.parse(JSON.stringify(SrcReader.users)));
});

module.exports = Router;
