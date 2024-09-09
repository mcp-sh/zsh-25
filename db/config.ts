import { column, defineDb, defineTable } from "astro:db";

const Rsvps = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    company: column.text({ optional: true }),
    email: column.text({ unique: true }),
    pax: column.number(),
    arrDate: column.text({ optional: true }),
    arrFlight: column.text({ optional: true }),
    depDate: column.text({ optional: true }),
    depFlight: column.text({ optional: true }),
    notes: column.text({ optional: true }),
  },
});

const Lunch = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    company: column.text({ optional: true }),
    email: column.text({ unique: true }),
    pax: column.number(),
    notes: column.text({ optional: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Rsvps, Lunch },
});
