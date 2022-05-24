const express =require('express');
const bodyParser=require('body-parser')
require('dotenv').config()
const cors=require('cors')
const app=express();
app.use(bodyParser.json())
app.use(cors())


const authRoutes=require('./routes/authRouters')
const websiteRoutes=require('./routes/websiteRouters')
// const authRoutes=require('./routes/authRouters')

const connect =require('./connection/db')
connect(); // function call to connect with database

app.use('/',authRoutes)
app.use('/',websiteRoutes)


const PORT=process.env.PORT || 4000 ;
app.listen(PORT,()=>{
     console.log(`Your app is running at Port ${PORT}`)

})
