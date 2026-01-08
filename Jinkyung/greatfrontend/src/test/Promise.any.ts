/**
 * @param {Array} iterable
 * @return {Promise}
 */
export default function promiseAny<T>(
  iterable: Array<T | Promise<T>>
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      reject(new AggregateError([]));
      return;
    }
    const errors: T[] = [];
    let pending = iterable.length;
    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        errors[index] = err;
        pending--;

        if (pending === 0) {
          reject(new AggregateError(errors));
        }
      }
    });
  });
}
