import { 
    addProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct, 
    deleteProduct 
} from "./product.service.js";

// إنشاء منتج جديد
export const addProductController = async (req, res) => {
    try {
        const product = await addProduct(req.body);
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product
        });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};

// جلب كل المنتجات
export const getAllProductsController = async (req, res) => {
    try {
        const productsList = await getAllProducts();
        return res.status(200).json({
            success: true,
            data: productsList
        });
    } catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
};

// جلب منتج محدد
export const getProductByIdController = async (req, res) => {
    try {
        const { id } = req.params; // قراءة الـ ID من الرابط (URL parameters)
        const product = await getProductById(id);
        return res.status(200).json({
            success: true,
            data: product
        });
    } catch (err) {
        return res.status(404).json({ success: false, message: err.message });
    }
};

// تحديث منتج
export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await updateProduct(id, req.body);
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            data: updated
        });
    } catch (err) {
        return res.status(400).json({ success: false, message: err.message });
    }
};

// حذف منتج
export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteProduct(id);
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
            data: deleted
        });
    } catch (err) {
        return res.status(404).json({ success: false, message: err.message });
    }
};