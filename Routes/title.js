const express = require('express');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', (req, res) => {
    res.send(SrcReader.getSrc().title);
});

module.exports = Router;