function getName()
{
    const url = '/name';

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
      if (this.status == 200) document.getElementById('message').innerHTML = `Olá ${this.responseText}, aguarde o início do Quiz.`;
    });
    request.send();
}

function getQuiz()
{
  const url = '/quiz';

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', function () {
      if (this.status == 200) window.location.href = "/quiz";
    });
    request.send();
}

setInterval(getQuiz, 1000);
getName();