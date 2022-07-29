const express=require('express')
const router=express.Router()
const userControllers=require('../../controllers/websiteController/user.controller')
const authControllers = require("../../controllers/authController/auth.controller")

router.post("/add",authControllers.signup)
router.get("/getAllUsers",userControllers.getAllUsers)
router.get("/getUserById/:id",userControllers.getUserById)

router.delete("/deletePostById/:id",userControllers.deleteUserById)
// router.put("/updatePost/:id",()=>{})

module.exports=router