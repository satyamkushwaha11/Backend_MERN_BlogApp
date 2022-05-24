const { model, Schema, trusted } = require('mongoose')

const likeSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    postId:{
       type:String,
       default:true
    },
    comment:{
        type:String,
        requiredtrue
    }
    
},
   { timestamps: true}

)

module.exports=model('users',likeSchema)


