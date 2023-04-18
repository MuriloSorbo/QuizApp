const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const SrcReader = require('./SrcReader');

const quizRouter = require('./Routes/quiz');
const loginRouter = require('./Routes/login');

const app = express();
const port = 3000;

app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/Pages/Quiz/Public', express.static('Pages/Quiz/Public'));
app.use('/Pages/Login/Public', express.static('Pages/Login/Public'));

app.use('/quiz', quizRouter);
app.use('/login', loginRouter);

SrcReader.init();

app.listen(port, () => {
  console.log('Server is listening!');
});
