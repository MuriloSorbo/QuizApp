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

getTitle();
