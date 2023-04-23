function getRequest(url, funcOk, funcErr) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) funcOk(this.responseText);
    else funcErr(this.responseText);
  });
  request.send();
}

function getName() {
  getRequest(
    '/name',
    (response) =>
      (document.getElementById(
        'message'
      ).innerHTML = `Olá ${response}, aguarde o início do Quiz.`)
  );
}

function getQuiz() {
  getRequest('/quiz', (_) => (window.location.href = '/quiz'));
}

setInterval(getQuiz, 1000);
getName();
