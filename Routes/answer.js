const express = require('express');

const UserQuiz = require('../Models/UserQuiz');
const checkAuthenticated = require('../checkAuthenticated');
const SrcReader = require('../SrcReader');

const Router = express.Router();

Router.post('/correct', checkAuthenticated, (req, res) => {
    const name = req.session.name;

    const compareUser = new UserQuiz(name, undefined, undefined, undefined);
    const user = SrcReader.getUser(compareUser);

    console.log('Correct');
    console.log(user.score);

    res.status(200).send();
});

Router.post('/incorrect', checkAuthenticated, (req, res) => {
    const name = req.session.name;

    const compareUser = new UserQuiz(name, undefined, undefined, undefined);
    const user = SrcReader.getUser(compareUser);

    console.log('Incorrect');
    console.log(user.score);

    res.status(200).send();
});

module.exports = Router;