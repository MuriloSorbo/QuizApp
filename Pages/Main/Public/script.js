function getRequest(url, funcOk, funcErr) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.addEventListener('load', function () {
    if (this.status == 200) funcOk(this.responseText);
    else funcErr(this.responseText);
  });
  request.send();
}

function getTitle() {
  getRequest(
    '/title',
    (response) => (document.getElementById('title').innerHTML = response)
  );
}

function getUsers() {
  getRequest('/users', (response) => handleData(response));
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
getTitle();
