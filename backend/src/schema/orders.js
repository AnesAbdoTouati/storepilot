import {
    pgTable,
    serial,
    integer,
    numeric,
    timestamp,
    pgEnum,
} from "drizzle-orm/pg-core";

import { customers } from "./customers.js";
import { users } from "./users.js";


export const orderStatusEnum = pgEnum("order_status", [
    "PENDING",
    "COMPLETED",
    "CANCELLED",
]);


export const orders = pgTable("orders", {

    id: serial("id").primaryKey(),


    customerId: integer("customer_id")
        .notNull()
        .references(() => customers.id),


    userId: integer("user_id")
        .notNull()
        .references(() => users.id),


    status: orderStatusEnum("status")
        .notNull()
        .default("PENDING"),


    total: numeric("total", {
        precision: 10,
        scale: 2,
    })
    .notNull()
    .default("0"),


    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull(),

});