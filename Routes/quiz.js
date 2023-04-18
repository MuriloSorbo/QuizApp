const express = require('express');
const path = require('path');

const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Quiz/index.html'));
});

module.exports = Router;
