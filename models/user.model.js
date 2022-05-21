const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    role:{
       type:String,
       default:'USER'
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
   { timestamps: true}

)

module.exports=model('users',userSchema)


