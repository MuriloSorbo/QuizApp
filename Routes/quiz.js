const express = require('express');
const path = require('path');

const Router = express.Router();

Router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pages/Quiz/index.html'));
});

module.exports = Router;
