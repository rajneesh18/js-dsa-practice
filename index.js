var TimeLimitedCache = function () {
  (expired = 0), (total = 0), (data = {});
};

TimeLimitedCache.prototype.set = (key, value, expired) => {
  data[key] = { value: value, expired: expired };
  total += 1;
};
TimeLimitedCache.prototype.get = (key) => {
  if (data[key] != undefined) {
    return true;
  }
  return false;
};

TimeLimitedCache.prototype.count = function () {
  return total;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */

var obj = new TimeLimitedCache();
obj.set(1, 42, 1000);
console.log(obj.get(1));
console.log(obj.count());
