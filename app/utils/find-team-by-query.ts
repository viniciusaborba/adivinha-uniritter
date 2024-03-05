import { db } from "@/db";

export function FindTeamByQuery(q: string) {
  const team = db.filter((team) => team.slug === q);

  return team[0]
}
