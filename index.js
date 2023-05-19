function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

function proxy(el) {
  const map = {};

  return {
    addEventListener: (event, func) => {
      !map[event] && el.addEventListener(event, () => map[event]());

      map[event] = func;

      console.log(map);
    },
  };
}

const div = proxy(document.querySelector('div'));

div.addEventListener('click', a);
div.addEventListener('click', b);
