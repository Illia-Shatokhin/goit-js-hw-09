import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Declaration of constants and variables
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
      Notify.failure('Please choose a date in the future');
    } else {
      startButton.removeAttribute('disabled', 'disabled');
      startButton.setAttribute('enabled', 'enabled');
      dateInputValue = selectedDates[0].getTime();
    }
  },
};
let dateInputValue = 0;
let minMs = 1001;
let intervalId = 0;

flatpickr(dateInput, options);

startButton.setAttribute('disabled', 'disabled');

//Add styles
document.querySelector('.timer').style.display = 'flex';
document.querySelector('.timer').style.gap = '10px';
valueSpans.forEach(el => {
  el.style.display = 'block';
  el.style.fontWeight = '700';
  el.style.fontSize = '42px';
  el.style.lineHeight = '57px';
  el.style.textAlign = 'center';
  el.style.letterSpacing = '0.05em';
  el.style.color = '#303030';
});
document.querySelectorAll('.label').forEach(el => {
  el.style.fontWeight = '700';
  el.style.fontSize = '15px';
  el.style.lineHeight = '18px';
  el.style.textAlign = 'center';
  el.style.color = '#303030';
});

// Add listener on start button with setInterval
startButton.addEventListener('click', () => {
  countdown();
  intervalId = setInterval(countdown, 1000);
});

// Functions
function countdown() {
  if (minMs <= 1000) {
    clearInterval(intervalId);
    Notify.success('The time has come. Congratulations');
  } else {
    const valuesСonvertMs = Object.values(
      convertMs(computeMsDifference(new Date(), dateInputValue))
    );
    valueSpans.forEach(el => {
      const valueConvertMs = valuesСonvertMs.shift();

      changeTextcontent(el, addLeadingZero(valueConvertMs));
    });
    minMs = computeMsDifference(new Date(), dateInputValue);
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
