let count = 20;
let correct = '';

const decrementTimer = setInterval(function () {
  count = Math.max(--count, 0);

  document.getElementById('time').innerHTML = count + 's.';
}, 1000);

function getNext() {
  const url = '/next';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) {
      handleData(this.responseText);
    }
  });
  request.send();
}

function sendCorrect()
{
  const url = '/answer/correct';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send();
}

function sendIncorrect()
{
  const url = '/answer/incorrect';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send();
}

function handleData(response) {
  document.getElementById('A').style.removeProperty('background-color');
  document.getElementById('A').style.removeProperty('border-color');
  document.getElementById('A').style.removeProperty('color');

  document.getElementById('B').style.removeProperty('background-color');
  document.getElementById('B').style.removeProperty('border-color');
  document.getElementById('B').style.removeProperty('color');

  document.getElementById('C').style.removeProperty('background-color');
  document.getElementById('C').style.removeProperty('border-color');
  document.getElementById('C').style.removeProperty('color');

  document.getElementById('D').style.removeProperty('background-color');
  document.getElementById('D').style.removeProperty('border-color');
  document.getElementById('D').style.removeProperty('color');

  const json = JSON.parse(response);

  document.getElementById('question').innerHTML = json.Question;
  document.getElementById('A').innerHTML = json.A;
  document.getElementById('B').innerHTML = json.B;
  document.getElementById('C').innerHTML = json.C;
  document.getElementById('D').innerHTML = json.D;

  count = json.Time;
  correct = json.Correct;
}

function select(answer) {
  document.getElementById('A').style.backgroundColor = '#e74c3c';
  document.getElementById('A').style.borderColor = '#e74c3c';
  document.getElementById('A').style.color = '#fff';

  document.getElementById('B').style.backgroundColor = '#e74c3c';
  document.getElementById('B').style.borderColor = '#e74c3c';
  document.getElementById('B').style.color = '#fff';

  document.getElementById('C').style.backgroundColor = '#e74c3c';
  document.getElementById('C').style.borderColor = '#e74c3c';
  document.getElementById('C').style.color = '#fff';

  document.getElementById('D').style.backgroundColor = '#e74c3c';
  document.getElementById('D').style.borderColor = '#e74c3c';
  document.getElementById('D').style.color = '#fff';

  document.getElementById(correct).style.backgroundColor = '#2ecc71';

  if (answer == correct) sendCorrect();
  else sendIncorrect();
}

setInterval(getNext, 1000);
