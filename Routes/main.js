const express = require('express');
const path = require('path');

const checkAuthenticated = require('../checkAuthenticated');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
    if (req.session.name != SrcReader.getSrc().mainPass)
    {
        res.redirect('/waiting');
        return;
    }

    res.sendFile(path.join(__dirname, '../Pages/Main/index.html'));
});

module.exports = Router;