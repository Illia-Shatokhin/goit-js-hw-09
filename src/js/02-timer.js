import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.getElementById('datetime-picker');
const startButton = document.querySelector('button');
const valueSpans = document.querySelectorAll('.value');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= new Date().getTime()) {
      alert('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled', 'disabled');
      startButton.setAttribute('enabled', 'enabled');
      dateInputValue = selectedDates[0].getTime();
    }
  },
};

let dateInputValue = 0;
let a = 1001;
let intervalId = 0;

flatpickr(dateInput, options);

startButton.setAttribute('disabled', 'disabled');

startButton.addEventListener('click', () => {
  intervalId = setInterval(countdown, 1000);
});

function countdown() {
  if (a <= 1000) {
    clearInterval(intervalId);
  } else {
    const valuesСonvertMs = Object.values(
      convertMs(computeMsDifference(new Date(), dateInputValue))
    );
    valueSpans.forEach(el => {
      const valueConvertMs = valuesСonvertMs.shift();

      changeTextcontent(el, addLeadingZero(valueConvertMs));
    });
    a = computeMsDifference(new Date(), dateInputValue);
  }
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function changeTextcontent(el, textContent) {
  el.textContent = `${textContent}`;
}

function computeMsDifference(dateNow, dateFuture) {
  return dateFuture - dateNow;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
