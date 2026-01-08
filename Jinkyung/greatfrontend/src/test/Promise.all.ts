export default function promiseAll<T>(iterable: Array<T|Promise<T>>): Promise<T[]> {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      resolve([]);
      return;
    }
    const results: T[] = [];
    let completed = 0;

    iterable.forEach((item, index) => {
      Promise.resolve(item)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === iterable.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
