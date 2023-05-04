/**
 * 2622: CacheWithTimeLimit
 * Write a class that allows getting and setting key-value pairs, however a time until expiration is associated   with each key.
 * The class has three public methods:
 *
 * set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
 *
 * get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 *
 * count(): returns the count of un-expired keys.
 */

export var TimeLimitedCache = function () {
  this.data = new Map();
};

TimeLimitedCache.prototype.set = function (key, val, expiredAt) {
  if (this.data.has(key) && this.data.get(key).expiredAt > Date.now()) {
    this.data.set(key, {
      value: val,
      expiredAt: Date.now() + expiredAt,
    });
    return true;
  }
  this.data.set(key, {
    value: val,
    expiredAt: Date.now() + expiredAt,
  });
  return false;
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.data.has(key)) {
    if (this.data.get(key).expiredAt > Date.now()) {
      return this.data.get(key).value;
    }
    this.data.delete(key);
  }

  return -1;
};

TimeLimitedCache.prototype.count = function () {
  let size = this.data.size > 0 ? true : false;
  let count = 0;
  if (size) {
    this.data.forEach((key, value) => {
      if (key.expiredAt > Date.now()) {
        count += 1;
      }
    });
  }
  return count;
};

/**
 * const limitCatch = new TimeLimitedCache();
 * limitCatch.set(2, 50, 1000);
 * console.log(limitCatch.count(), 'before-1st');
 * console.log(limitCatch.get(2), 'get');
 * console.log(limitCatch.count(), 'before-2nd');
 * sleep(6000)
 *   .then(() => {
 *     console.log(limitCatch.get(2), 'internalget');
 *     console.log(limitCatch.count(), 'internalcount');
 *   })
 *   .catch((err) => console.log(err));
 */
