import express from 'express'
import {authUser, registerUser, getUserProfile, updateUserProfile, getUsers} from '../controllers/userController.mjs'
import {protect,admin} from '../middleware/authMiddleware.mjs'

const router = express.Router()

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser) 
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default router