var debounce = function (context, fn, t) {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, t);
  };
};

var throttle = function (context, fn, t) {
  let lastArgs;
  let shouldCall = true;

  var execute = () => {
    if (shouldCall && lastArgs) {
      fn.apply(context, lastArgs);
      lastArgs = null;
      shouldCall = false;

      setTimeout(() => {
        shouldCall = true;
        execute();
      }, t);
    }
  };

  return function (...args) {
    lastArgs = args;
    execute();
  };
};

var username = document.getElementById('username');
let sendEmail = document.getElementById('sendEmail');

let handleInput = debounce(
  this,
  (e) => {
    console.log('debouce');
  },
  1000
);

let handleClick = throttle(
  this,
  (e) => {
    console.log('throttle');
  },
  1000
);

username.addEventListener('input', handleInput);

sendEmail.addEventListener('click', handleClick);
