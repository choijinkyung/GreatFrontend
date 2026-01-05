type Session = { user: number; duration: number; equipment: Array<string> };

export default function mergeData(sessions: Array<Session>): Array<Session> {
  const results = new Map<number, Session>(); // {8:{user:8,duration:50,equipment:[]}, }

  for (const session of sessions) {
    if (results.has(session.user)) {
      const existing = results.get(session.user)!;
      existing.duration += session.duration;
      const equipment = new Set(existing.equipment);
      for (const item of session.equipment) {
        equipment.add(item);
      }
      existing.equipment = [...equipment].sort();
    } else {
      results.set(session.user, {
        ...session,
        equipment: [...session.equipment],
      });
    }
  }
  console.log(results);
  return Array.from(results.values());
}
