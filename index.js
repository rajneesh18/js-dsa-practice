import { TimeLimitedCache } from './leetcode/2622-CacheWithTimelimit.js';
import { sleep } from './leetcode/2621-Sleep.js';

const limitCatch = new TimeLimitedCache();
limitCatch.set(2, 50, 1000);
console.log(limitCatch.count(), 'before-1st');
console.log(limitCatch.get(2), 'get');
console.log(limitCatch.count(), 'before-2nd');

sleep(6000)
  .then(() => {
    console.log(limitCatch.get(2), 'internalget');
    console.log(limitCatch.count(), 'internalcount');
  })
  .catch((err) => console.log(err));
