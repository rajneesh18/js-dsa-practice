export var flat = (arr, n) => {
  if (n == 0) return arr;

  let flatarr = [];
  for (let key of arr) {
    if (!Array.isArray(key)) {
      flatarr.push(key);
    } else {
      flatarr.push(...flat(key, n - 1));
    }
  }

  return flatarr;
};
