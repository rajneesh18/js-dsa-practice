/**
 * Throttling:
 * Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.
 *
 * Debouncing:
 * Debouncing will bunch a series of sequential call to a function into a single call to that function.
 * It ensures that one notification is made for an event that fires multiple times.
 */

let timer;
let inp = document.getElementById('root');

let debouce = (fn, delay) => {
  if (timer) {
    clearTimeout(timer);
  }

  timer = setTimeout(() => fn(), delay);
};

const searchInput = () => {
  debouce(() => {
    console.log(`Fetching result for..  ${inp.value}`);
  }, 1200);
};

/** ***************************************************** */

let apiCalled;
let throttle = (fn, delay) => {
  if (apiCalled) return;
  apiCalled = true;

  setTimeout(() => {
    fn();
    apiCalled = false;
  }, delay);
};

const sendEmail = () => {
  throttle(() => {
    console.log('Sending Email', count++);
  }, 500);
};
