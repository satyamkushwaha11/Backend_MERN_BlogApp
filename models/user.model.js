const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    userName: {
        type: String,
        required: false
    },
    role:{
       type:String,
       default:'USER'
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    }
},
   { timestamps: true}

)

module.exports=model('users',userSchema)


