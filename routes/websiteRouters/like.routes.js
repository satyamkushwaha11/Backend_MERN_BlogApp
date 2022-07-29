const express=require('express')
const router=express.Router()
const likeControllers=require('../../controllers/websiteController/like.controller')


router.post("/addLike/:postId",likeControllers.addLike)
// router.get("/getPost/:id",()=>{})
// router.delete("/deletePost/:id",()=>{})
// router.put("/updatePost/:id",()=>{})

module.exports=router