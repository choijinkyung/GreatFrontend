/**
 * @param {Function} func
 * @return {Function}
 */
export default function curry(func:Function) :Function{
  /**
   * 1. return function
   * 2. 인자가 다 모이면, 함수를 실행
   * 3. 인자가 다 모이지 않으면, 인자를 다시 받아와서 바인딩함
   */
  return function curried(...args:any[]):any {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return curried.bind(this, ...args);
    }
  };
}
