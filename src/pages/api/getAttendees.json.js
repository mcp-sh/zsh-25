import { db, Rsvps } from "astro:db";
export async function GET() {
  const attendees = await db.select().from(Rsvps);

  return new Response(JSON.stringify(attendees), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
