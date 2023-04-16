const express = require('express');

const quizRouter = require('./Routes/quiz');
const app = express();
const port = 3000;

app.use('/Pages/Quiz/Public', express.static('Pages/Quiz/Public'));

app.use('/quiz', quizRouter);

app.listen(port, () => {
  console.log('Server is listening!');
});
