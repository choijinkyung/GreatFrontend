type ThrottleFunction<T extends any[]> = (...args: T) => any;

export default function throttle<T extends any[]>(
  func: ThrottleFunction<T>,
  wait: number
): ThrottleFunction<T> {
  // throw 'Not implemented!';
  let isThrottled = false; //실행 가능상태

  return function (...args) {
    if (isThrottled) {
      //실행불가 상태시 리턴
      return;
    }
    isThrottled = true; //불가로 만들고
    setTimeout(() => {
      isThrottled = false; //시간이 지나면 실행가능하게
    }, wait);
    func.apply(this, args); //함수실행
  };
}

/**
 * how many timew wait time of X miliseconds
 * every x miliseconds
 *
 */
