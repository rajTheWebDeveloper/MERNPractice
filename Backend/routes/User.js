import express from 'express'
import SignUpUser from '../controllers/User/SignUpUser.js'
import SignInUser from '../controllers/User/SignInUser.js'


let router=express.Router()

router.post('/signup',SignUpUser)
router.post('/signin',SignInUser)


export default router