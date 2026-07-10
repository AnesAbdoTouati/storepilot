import {
    pgTable,
    serial,
    varchar,
    text,
    numeric,
    integer,
    timestamp,
} from "drizzle-orm/pg-core";
import { categories } from "./categories.js";
import { suppliers } from "./suppliers.js";
export const products = pgTable("products", {

    id: serial("id").primaryKey(),

    name: varchar("name", {
        length: 100,
    }).notNull(),

    description: text("description"),

    price: numeric("price", {
        precision: 10,
        scale: 2,
    }).notNull(),

    quantity: integer("quantity")
        .notNull()
        .default(0),


    categoryId: integer("category_id")
        .notNull()
        .references(() => categories.id),


    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),

    updatedAt: timestamp("updated_at")
        .defaultNow()
        .notNull(),
    supplierId: integer("supplier_id")
        .notNull()
        .references(() => suppliers.id),

});