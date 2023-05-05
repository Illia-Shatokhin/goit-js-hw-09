const startButton = document.querySelectorAll('button')[0];
const stopButton = document.querySelectorAll('button')[1];
let timerId = null;

stopButton.setAttribute('disabled', 'disabled');

startButton.addEventListener('click', changesBackgroundColor);

stopButton.addEventListener('click', stopChangesBackgroundColor);

function changesBackgroundColor() {
  timerId = setInterval(attachBodyBackgroundColor, 1000, getRandomHexColor);
  stopButton.removeAttribute('disabled', 'disabled');
  startButton.setAttribute('disabled', 'disabled');
}

function stopChangesBackgroundColor() {
  clearTimeout(timerId);
  startButton.removeAttribute('disabled', 'disabled');
  stopButton.setAttribute('disabled', 'disabled');
}

function attachBodyBackgroundColor(hexColor) {
  document.body.style.backgroundColor = `${hexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
