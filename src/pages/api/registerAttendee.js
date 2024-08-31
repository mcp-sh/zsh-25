import { db, Rsvps } from "astro:db";

export async function POST({ request }) {
  try {
    const data = await request.json();
    console.log(data);
    const name = data.name;
    const company = data.company;
    const email = data.email;
    const pax = data.pax;
    const arrDate = data.arrDate;
    const depDate = data.depDate;
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
    console.log(result);
    return new Response(
      JSON.stringify({
        message: `Succesfully added attendee - ${name} with id ${result}`,
      }),
      { status: 200 },
      { Headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: `Failed to add attendee - ${error}`,
      }),
      { status: 500 },
      { Headers: { "Content-Type": "application/json" } },
    );
  }
}
