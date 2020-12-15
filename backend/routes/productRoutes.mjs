import express from 'express'
import {getProducts, getProductById, deleteProduct} from '../controllers/productController.mjs'
import {protect,admin} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router