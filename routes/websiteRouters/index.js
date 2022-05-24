const express=require('express')
const router=express.Router()
const postRoutes=require('./post.routes')
const likeRoutes=require('./like.routes')
const commentRoutes=require('./comment.routes')


router.use('/post',postRoutes)
router.use('/like',likeRoutes)
router.use('/comment',commentRoutes)


module.exports=router
