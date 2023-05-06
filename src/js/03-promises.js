import { Notify } from 'notiflix/build/notiflix-notify-aio';

const btn = document.querySelector('button');
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const firstDelay = Number(form.firstElementChild.firstElementChild.value);
  const stepDelay = Number(
    form.firstElementChild.nextElementSibling.firstElementChild.value
  );
  const amount = Number(
    form.lastElementChild.previousElementSibling.firstElementChild.value
  );
  let i = 1;
  for (
    let j = firstDelay;
    j < stepDelay * amount + firstDelay;
    j += stepDelay
  ) {
    createPromise(i, j)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    i++;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
