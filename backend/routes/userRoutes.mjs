import express from 'express'
import {authUser, getUserProfile} from '../controllers/userController.mjs'
import {protect} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.post('/login', authUser) 
router.route('/profile').get(protect, getUserProfile)

export default router