import express from 'express'
import {addOrderItems, getOrderById, updateOrderToPaid} from '../controllers/orderController.mjs'
import {protect} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router