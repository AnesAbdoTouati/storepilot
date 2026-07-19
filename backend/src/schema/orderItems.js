import {
    pgTable,
    serial,
    integer,
    numeric,
} from "drizzle-orm/pg-core";


import { orders } from "./orders.js";
import { products } from "./products.js";


export const orderItems = pgTable("order_items", {


    id: serial("id").primaryKey(),


    orderId: integer("order_id")
        .notNull()
        .references(() => orders.id),


    productId: integer("product_id")
        .notNull()
        .references(() => products.id),


    quantity: integer("quantity")
        .notNull(),


    price: numeric("price", {
        precision: 10,
        scale: 2,
    })
    .notNull(),

});