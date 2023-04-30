let count = 0;
let correct = '';
let freezeTime = true;

const decrementTimer = setInterval(function () {
  if (freezeTime) return;

  count = Math.max(--count, 0);

  if (count <= 0) select('X');

  document.getElementById('time').innerHTML = count + 's.';
}, 1000);

function getNext() {
  const url = '/next';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) {
      handleData(this.responseText);
    } else if (this.status == 410) {
      window.location.href = '/finish';
    }
  });
  request.send();
}

function sendCorrect() {
  const url = '/answer/correct';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send();
}

function sendIncorrect(alt) {
  const url = `/answer/incorrect:${alt}`;

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send();
}

function sendTimeout() {
  const url = '/answer/timeout';

  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.send();
}

function handleData(response) {
  freezeTime = false;

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

  json = JSON.parse(response);

  document.getElementById('question').innerHTML = json.Question;
  document.getElementById('A').innerHTML = json.A;
  document.getElementById('B').innerHTML = json.B;
  document.getElementById('C').innerHTML = json.C;
  document.getElementById('D').innerHTML = json.D;

  count = json.Time;
  correct = json.Correct;
}

function select(answer) {
  if (!correct) {
    return;
  }

  freezeTime = true;

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
  else if (answer == 'X') sendTimeout();
  else sendIncorrect(answer);
}

setInterval(getNext, 1000);
