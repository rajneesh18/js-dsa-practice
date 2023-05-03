export var CacheWithTimelimit = () => {
  let expired = 0;
  let total = 0;
};

// CacheWithTimelimit.prototype.get = (key, value, expired) => {
//   console.log(key);
// };
// CacheWithTimelimit.prototype.set() = () => {};

/**
 * Return the count of un-expired key
 *
 * @return {integer} c
 */
CacheWithTimelimit.prototype.count = () => {
  return total - expired;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
