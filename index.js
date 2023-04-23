const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const SrcReader = require('./SrcReader');

const quizRouter = require('./Routes/quiz');
const loginRouter = require('./Routes/login');
const titleRouter = require('./Routes/title');
const waitingRouter = require('./Routes/waiting');
const nameRouter = require('./Routes/name');
const mainRouter = require('./Routes/main');
const usersRouter = require('./Routes/users');

const app = express();
const port = 3000;

app.use(express.json());
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/Pages/Quiz/Public', express.static('Pages/Quiz/Public'));
app.use('/Pages/Login/Public', express.static('Pages/Login/Public'));
app.use('/Pages/Waiting/Public', express.static('Pages/Waiting/Public'));
app.use('/Pages/Main/Public', express.static('Pages/Main/Public'));

app.get('/', (_, res) => res.redirect('/login'));
app.use('/quiz', quizRouter);
app.use('/login', loginRouter);
app.use('/title', titleRouter);
app.use('/waiting', waitingRouter);
app.use('/name', nameRouter);
app.use('/main', mainRouter);
app.use('/users', usersRouter);

SrcReader.init();

app.listen(port, () => {
  console.log('Server is listening!');
});
