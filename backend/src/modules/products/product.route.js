import { Router } from "express";
import {
    addProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductController,
    deleteProductController
} from "./product.controller.js";

const productRouter = Router();

// 1. إضافة منتج جديد (POST)
productRouter.post("/", addProductController);

// 2. جلب جميع المنتجات (GET)
productRouter.get("/", getAllProductsController);

// 3. جلب منتج واحد بواسطة الـ ID (GET)
productRouter.get("/:id", getProductByIdController);

// 4. تحديث منتج بواسطة الـ ID (PUT/PATCH)
productRouter.put("/:id", updateProductController);

// 5. حذف منتج بواسطة الـ ID (DELETE)
productRouter.delete("/:id", deleteProductController);

export default productRouter;