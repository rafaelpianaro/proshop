import express from 'express'
import {addOrderItems} from '../controllers/orderController.mjs'
import {protect} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').post(protect, addOrderItems)

export default router