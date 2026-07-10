import {
    pgTable,
    serial,
    varchar,
    timestamp,
} from "drizzle-orm/pg-core";


export const suppliers = pgTable("suppliers", {

    id: serial("id").primaryKey(),

    name: varchar("name", {
        length: 100,
    }).notNull(),

    phone: varchar("phone", {
        length: 20,
    }),

    email: varchar("email", {
        length: 255,
    }),

    address: varchar("address", {
        length: 255,
    }),

    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull(),

});