import {
    pgTable,
    serial,
    integer,
    varchar,
    numeric,
    timestamp,
} from "drizzle-orm/pg-core";


import { orders } from "./orders.js";


export const invoices = pgTable("invoices", {


    id: serial("id").primaryKey(),


    orderId: integer("order_id")
        .notNull()
        .unique()
        .references(() => orders.id),


    invoiceNumber: varchar("invoice_number", {
        length: 50,
    })
    .notNull()
    .unique(),


    total: numeric("total", {
        precision: 10,
        scale: 2,
    })
    .notNull(),


    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

});