const express=require('express')
const router=express.Router()
const commentControllers=require('../../controllers/websiteController/comment.controller')


router.post("/addComment/:postId",commentControllers.addComment)
// router.get("/getPost/:id",()=>{})
// router.delete("/deletePost/:id",()=>{})
// router.put("/updatePost/:id",()=>{})

module.exports=router