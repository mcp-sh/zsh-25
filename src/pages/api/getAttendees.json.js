import { db, Rsvps, Lunch } from "astro:db";
export async function GET() {
  const attendees = await db.select().from(Rsvps);
  const lunchAttendees = await db.select().from(Lunch);

  return new Response(
    JSON.stringify({ RSVP: attendees, LUNCH: lunchAttendees }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
}
