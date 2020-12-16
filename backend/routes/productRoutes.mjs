import express from 'express'
import {getProducts, getProductById, deleteProduct, updateProduct, createProduct} from '../controllers/productController.mjs'
import {protect,admin} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

export default router