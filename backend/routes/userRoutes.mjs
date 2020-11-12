import express from 'express'
import {authUser, registerUser, getUserProfile} from '../controllers/userController.mjs'
import {protect} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser) 
router.route('/profile').get(protect, getUserProfile)

export default router