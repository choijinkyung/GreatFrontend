type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  const result: any[] = [];

  /**
   * 1. 값이면 그대로 result에 push
   * 2. 배열이면 recursive 호출
   *  -> 배열인걸 어떻게 확인할것인가?
   *  -> 값인지 배열인지 확인
   */
  for (const item of value) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
/**
 * for ... in 은 key를 순회
 * for ... of 는 값을 순회
 */
