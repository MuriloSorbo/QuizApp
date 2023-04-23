let count = 20;

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

function handleData(response) {
  const json = JSON.parse(response);

  document.getElementById('question').innerHTML = json.Question;
  document.getElementById('a').innerHTML = json.A;
  document.getElementById('b').innerHTML = json.B;
  document.getElementById('c').innerHTML = json.C;
  document.getElementById('d').innerHTML = json.D;

  count = json.Time;
}

setInterval(getNext, 1000);
