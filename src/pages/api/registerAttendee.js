import { db, Rsvps } from "astro:db";

export async function POST({ request }) {
  try {
    const { name, company, email, pax, arrDate, depDate } =
      await request.json();

    const result = await db
      .insert(Rsvps)
      .values({
        name,
        company,
        email,
        pax,
        arrDate,
        depDate,
      })
      .returning();

    return new Response(
      JSON.stringify({
        message: `Succesfully added attendee - ${name} with id ${result.id}`,
      }),
      { status: 200 },
      { headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: `Failed to add attendee - ${error.message}` }),
      { status: 500 },
      { headers: { "Content-Type": "application/json" } },
    );
  }
}
