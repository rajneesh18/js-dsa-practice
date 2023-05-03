/**
 * 2621: Sleep
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
 */

/**
 * Sleep
 *
 * @param {number} millis
 */
export const sleep = async (millis) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, millis);
  });
};

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t));  // 100
 */
