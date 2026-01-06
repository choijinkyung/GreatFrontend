/**
 * @param {Function} func
 * @returns Function
 */
export default function memoize(func) {
  const cache = new Map();
  return function memoized(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(cache.get(args.toString()));
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
