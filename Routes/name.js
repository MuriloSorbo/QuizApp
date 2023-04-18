const express = require('express');
const checkAuthenticated = require('../checkAuthenticated');

const Router = express.Router();

Router.get('/', checkAuthenticated, (req, res) => {
    res.send(req.session.name);
})

module.exports = Router;