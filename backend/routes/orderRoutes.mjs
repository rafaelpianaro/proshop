import express from 'express'
import {addOrderItems, getOrderById} from '../controllers/orderController.mjs'
import {protect} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)

export default router