const express = require('express');
const srcReader = require('./srcReader');

const quizRouter = require('./Routes/quiz');
const app = express();
const port = 3000;

app.use('/Pages/Quiz/Public', express.static('Pages/Quiz/Public'));

app.use('/quiz', quizRouter);

const obj = srcReader.read();
console.log(obj[0]);

app.listen(port, () => {
  console.log('Server is listening!');
});
