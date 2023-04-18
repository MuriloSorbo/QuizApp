const express = require('express');
const path = require('path');

const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Login/index.html'));
});

Router.post('/', (req, res) => {
  const name = req.body.name;

  if (SrcReader.getSrc().mainPass == name) {
    // Redirecionar para página main
    return;
  }

  if (name) {
    // Injetar os cookies
    // Redirecionar para página quiz
    return;
  }

  res.redirect('/login');
});

module.exports = Router;
