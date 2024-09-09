import { db, Lunch } from "astro:db";

export async function POST({ request }) {
  try {
    const { name, email, pax } = await request.json();

    const result = await db
      .insert(Lunch)
      .values({
        name,
        email,
        pax,
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
