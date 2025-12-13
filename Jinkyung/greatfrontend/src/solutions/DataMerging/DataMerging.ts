/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
type session = {
  user: number;
  duration: number;
  equipment: Array<string>;
};
export default function mergeData(sessions: Array<session>) {
  // throw 'Not implemented!';
  const result = new Map();

  sessions.forEach((session) => {
    if (result.has(session.user)) {
      const origin = result.get(session.user);
      origin.duration += session.duration;
      origin.equipment = [
        ...new Set([...origin.equipment, ...session.equipment]),
      ].sort();
      // origin.equipment = [...origin.equipment,session.equipment]
    } else {
      result.set(session.user, {
        user: session.user,
        duration: session.duration,
        equipment: [...session.equipment],
      });
    }
  });
  console.log(result);
  return Array.from(result.values());
}

//1. 유저 세션 같은거 찾기, duration은 더하고, equipment는 붙이는데, 중복 제거
//2. 유저 세션 같은 거 찾기 -> set에 없으면 넣고 있으면 더하기.
//3. 중복 제거는 set
