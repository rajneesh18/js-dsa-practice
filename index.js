import { sleep } from './leetcode/2621-Sleep.js';

var TimeLimitedCache = function () {
  this.data = new Map();
};

TimeLimitedCache.prototype.set = function (key, val, expiredAt) {
  if (!this.data?.has(key)) {
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
      if (value.expiredAt > Date.now()) {
        count++;
      }
    });
  }
  return count;
};

const limitCatch = new TimeLimitedCache();
limitCatch.set(2, 50, 1000);
console.log(limitCatch.count(), 'before');
console.log(limitCatch.get(2), 'get');
console.log(limitCatch.count(), 's');

// sleep(500).then(() => {
//   console.log(limitCatch.count(), 'after');
// });
