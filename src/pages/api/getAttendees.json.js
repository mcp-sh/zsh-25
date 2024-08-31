import { db, Rsvps } from "astro:db";
// Outputs: /builtwith.json
export async function GET({ params, request }) {
  const attendees = await db.select().from(Rsvps);
  console.log(attendees);
  return new Response(JSON.stringify(attendees), {
    Headers: { "Content-Type": "application/json" },
  });

  // return new Response(JSON.stringify(attendees));
}
