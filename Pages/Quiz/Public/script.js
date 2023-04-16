let count = 20;

const decrementTimer = setInterval(function () {
  count--;

  document.getElementById('time').innerHTML = count + 's.';

  if (count === 0) {
    clearInterval(decrementTimer);
  }
}, 1000);
