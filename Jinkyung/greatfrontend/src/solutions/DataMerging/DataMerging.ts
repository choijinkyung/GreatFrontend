/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @return {Array}
 */
export default function mergeData(sessions) {
    let results = [];
    const sessionsForUser = new Map()

    for (let session of sessions) {
        if (sessionsForUser.has(session.user)) {
            const userSession = sessionsForUser.get(session.user)
            userSession.duration += session.duration;
            //equipment 배열에 넣기, 중복없이 
            session.equipment.forEach((equipment) => {
                userSession.equipment.add(equipment)
            })
        } else {//처음본 경우
            let clonedData = {
                ...session,
                equipment: new Set(session.equipment) //원본배열을 그대로 쓰면 side effect발생
            }
            sessionsForUser.set(session.user, clonedData)
            //처음 발견시 result에 넣어줌
            results.push(clonedData);

        }
    }
    return results.map((session) => ({
        ...session, equipment: Array.from(session.equipment).sort()
    }))
}

/**
 * sum - duration
 * combine all equipment used,de-duplicate, sorting alpahbetically
 */
