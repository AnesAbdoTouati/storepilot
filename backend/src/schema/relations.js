import { relations } from "drizzle-orm";


import { users } from "./users.js";
import { customers } from "./customers.js";
import { orders } from "./orders.js";
import { orderItems } from "./orderItems.js";
import { products } from "./products.js";
import { categories } from "./categories.js";
import { invoices } from "./invoices.js";


// USER -> ORDERS

export const usersRelations = relations(users, ({ many }) => ({
    orders: many(orders),
}));



// CUSTOMER -> ORDERS

export const customersRelations = relations(customers, ({ many }) => ({
    orders: many(orders),
}));



// ORDER -> CUSTOMER + USER + ITEMS + INVOICE

export const ordersRelations = relations(orders, ({ one, many }) => ({

    customer: one(customers, {
        fields: [orders.customerId],
        references: [customers.id],
    }),

    user: one(users, {
        fields: [orders.userId],
        references: [users.id],
    }),

    items: many(orderItems),

    invoice: one(invoices),

}));



// ORDER ITEM -> ORDER + PRODUCT

export const orderItemsRelations = relations(orderItems, ({ one }) => ({

    order: one(orders, {
        fields: [orderItems.orderId],
        references: [orders.id],
    }),

    product: one(products, {
        fields: [orderItems.productId],
        references: [products.id],
    }),

}));



// PRODUCT -> CATEGORY + ORDER ITEMS

export const productsRelations = relations(products, ({ one, many }) => ({

    category: one(categories, {
        fields: [products.categoryId],
        references: [categories.id],
    }),

    orderItems: many(orderItems),

}));



// CATEGORY -> PRODUCTS

export const categoriesRelations = relations(categories, ({ many }) => ({

    products: many(products),

}));



// INVOICE -> ORDER

export const invoicesRelations = relations(invoices, ({ one }) => ({

    order: one(orders, {
        fields: [invoices.orderId],
        references: [orders.id],
    }),

}));