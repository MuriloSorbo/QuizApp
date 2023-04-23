function getUsers() {
  const url = '/users';

  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) handleData(this.responseText);
  });
  request.send();
}

function handleData(data) {
  const json = JSON.parse(data);

  document.getElementById('table-body').innerHTML = '';

  json.forEach((user) => {
    document.getElementById('table-body').innerHTML += `<tr>
        <td>${user.name}</td>
        <td>${user.status}</td>
        <td>${user.score}</td>
      </tr>`;
  });
}

setInterval(getUsers, 1000);
