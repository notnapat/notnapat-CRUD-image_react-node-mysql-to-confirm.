//6 //impr expre, // impr , getP, getProB, saveP, updateP, deleteP // expr rout

import express  from "express";
// import { Router } from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/ProductController.js"

const router = express.Router();

router.get('/products',getProducts)
router.get('/products/:id',getProductById)
router.post('/products',saveProduct)
router.patch('/products/:id',updateProduct)
router.delete('/products/:id',deleteProduct)

export default router;
