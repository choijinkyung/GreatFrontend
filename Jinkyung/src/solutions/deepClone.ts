/**
 * @template T
 * @param {T} value
 * @return {T}
 */
/*1. 재귀함수를 만들음
  2. 타입 확인 
  3. array의 경우 map
  4. object의 경우 cloned객체 만들어서 순회하며 복사(본인 속성만 하도록 주의)
*/
export default function deepClone(value) {
  if (typeof value === null || typeof value !== "object") return value;

  if (Array.isArray(value)) return value.map((item) => deepClone(item));

  const cloned = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {//상속받은 속성까지 복사할 수 없기에, 보인 소유인지 확인하기 위함
    //prototype.hasOwnProperty를 쓰는 이유 : Object.create(null)(프로토타입이 없는 객체를 만들기)의 경우, 
    // hasOwnProperty가 없기 때문에 value.hasOwnProperty를 하면 오류가 발생할 수 있음
      cloned[key] = deepClone(value[key]);
    }
  }
  return cloned;
}
