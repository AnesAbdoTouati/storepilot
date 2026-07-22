import { products } from "../../schema/products.js";
import { db } from "../../db/index.js";
import { eq } from "drizzle-orm"; // تُستخدم لمقارنة الحقول (مثل البحث عن طريق ID)

// 1. إضافة منتج جديد
export const addProduct = async (productData) => {
    const { name, description, price, quantity, categoryId, supplierId } = productData;

    if (!name) {
        throw new Error("Please provide a name for the product");
    }

    const newProduct = await db
        .insert(products)
        .values({ name, description, price, quantity, categoryId, supplierId })
        .returning();

    return newProduct[0];
};

// 2. جلب جميع المنتجات
export const getAllProducts = async () => {
    const allProducts = await db.select().from(products);
    return allProducts;
};

// 3. جلب منتج واحد برقمه المعرف (ID)
export const getProductById = async (id) => {
    const product = await db
        .select()
        .from(products)
        .where(eq(products.id, id));

    if (!product.length) {
        throw new Error("Product not found");
    }

    return product[0];
};

// 4. تحديث بيانات منتج
export const updateProduct = async (id, updateData) => {
    // التأكد أولاً من وجود المنتج
    await getProductById(id);

    const updatedProduct = await db
        .update(products)
        .set(updateData)
        .where(eq(products.id, id))
        .returning();

    return updatedProduct[0];
};

// 5. حذف منتج
export const deleteProduct = async (id) => {
    // التأكد أولاً من وجود المنتج
    await getProductById(id);

    const deletedProduct = await db
        .delete(products)
        .where(eq(products.id, id))
        .returning();

    return deletedProduct[0];
};