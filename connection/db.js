const mongoose = require("mongoose");
require("dotenv").config();

const URL = 
// "mongodb://localhost:27017/BlogApp"
process.env.DATABASE_URL;

const connect=async()=>{
  try{
      const response=await mongoose.connect(URL, { useUnifiedTopology: true ,useNewUrlParser: true})
        console.log('Connection Created');

  }
  catch(error){

     console.log({error})
  }
}

module.exports=connect

// mongoose.connect(
//   URL,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   (err) => {
//     console.log(err ? "error" : "Connection Created");
//   }
// );
