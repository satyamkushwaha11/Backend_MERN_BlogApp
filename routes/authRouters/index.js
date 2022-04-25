const express=require('express')
const router=express.Router();

const auth=require('../../controllers/authController/auth.controller')

router.post("/login",auth.login)
router.post("/signup",auth.signup)

module.exports=router