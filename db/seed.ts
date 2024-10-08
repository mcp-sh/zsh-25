import { db, Rsvps, Lunch } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.insert(Rsvps).values([
    {
      name: "Max Paeslack",
      company: "ZERMA Shanghai",
      email: "maxx@zerma.com",
      pax: 1,
      arrDate: "2024-10-18",
      depDate: "2024-10-21",
    },
  ]);
  await db.insert(Lunch).values([
    {
      name: "Max Paeslack",
      company: "ZERMA Shanghai",
      email: "mcp@macapa.me",
      pax: 1,
    },
  ]);
}
