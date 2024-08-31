import { db, Rsvps } from "astro:db";

// https://astro.build/db/seed
export default async function () {
  await db.insert(Rsvps).values([
    {
      name: "Max Paeslack",
      company: "ZERMA Shanghai",
      email: "maxx@zerma.com",
      pax: 1,
    },
    {
      name: "Sally Lu",
      company: "ZERMA Shanghai",
      email: "sally@zerma.com",
      pax: 1,
    },
  ]);
}
