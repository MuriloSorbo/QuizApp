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
    user.update('Resposta Correta', user.score + 1, user.curQuestion);

    res.status(200).send();
});

Router.post('/incorrect:alt', checkAuthenticated, (req, res) => {
    const alt = req.params.alt.split(':')[1];
    const name = req.session.name;

    const compareUser = new UserQuiz(name, undefined, undefined, undefined);
    const user = SrcReader.getUser(compareUser);

    console.log('Incorrect');
    user.update(`Resposta Incorreta (${alt})`, user.score, user.curQuestion);

    res.status(200).send();
});

Router.post('/timeout', checkAuthenticated, (req, res) => {
    const name = req.session.name;

    const compareUser = new UserQuiz(name, undefined, undefined, undefined);
    const user = SrcReader.getUser(compareUser);

    console.log('Timeout');
    user.update('Tempo esgotado', user.score, user.curQuestion);

    res.status(200).send();
});

module.exports = Router;