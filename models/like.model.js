const { model, Schema, trusted } = require('mongoose')

const likeSchema = new Schema({
    userId: {
        type: String,
        required: false
    },
    postId:{
       type:String,
       default:'USER'
    },
    likeType:{
        type:Number,
        required:trusted
    }
    
},
   { timestamps: true}

)

module.exports=model('users',likeSchema)


