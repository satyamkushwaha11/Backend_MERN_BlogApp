const express=require('express')
const router=express.Router()

router.post("/addPost",()=>{})
router.get("/getPost/:id",()=>{})
router.delete("/deletePost/:id",()=>{})
router.put("/updatePost/:id",()=>{})

module.exports=router