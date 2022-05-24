const express=require('express')
const router=express.Router()
const AuthGuard=require('../../middlewares/AuthGuard')
const postControllers=require('../../controllers/websiteController/post.controller')

router.post("/add",AuthGuard,postControllers.addPost)
router.get("/getPostById/:id",postControllers.getPostById)
router.get("/getPostsByUserId/:id",postControllers.getAllPostByUserId)
router.get("/getAllPosts",postControllers.getAllPosts)
router.delete("/delete/:id",postControllers.deletePost)
router.put("/update/:id",AuthGuard,postControllers.editPost)

module.exports=router