import { sleep } from './leetcode/2621-Sleep.js';

let t = Date.now();
sleep(100)
  .then(() => console.log(Date.now() - t))
  .catch((err) => console.log(err.message));
