/**
 * 2633. Convert Object to JSON String
 * Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys().
 *
 * Please solve it without using the built-in JSON.stringify method.
 */

/**
 * JSON Stringify
 * @param { any } object
 * @return { String }
 */
export var jsonStringify = (object) => {
  if (object === null) return null;
  if (typeof object !== 'object') {
    return object.toString();
  }

  if (Array.isArray(object)) {
    return (
      `[` +
      object.map((obj) => {
        return jsonStringify(obj?.toString());
      }) +
      ']'
    );
  }
  if (typeof object === 'object') {
    const keys = Object.keys(object).filter((key) => {
      if (typeof object[key] !== 'function') {
        return key;
      }
    });
    const items = keys.map(
      (key) => '"' + key + '":' + jsonStringify(object[key])
    );

    return '{' + items.join(',') + '}';
  }
};

/**
 * let obj = {
 *  a: 1,
 *  b: null,
 *  sum: () => {
 *    return 'sss';
 *  },
 *  arr: [1, 2, 3],
 * };
 * console.log(jsonStringify(obj));
 */
