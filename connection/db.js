const mongoose=require('mongoose')
require('dotenv').config()

const URL=process.env.DATABASE_URL

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