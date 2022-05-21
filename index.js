const express =require('express');
const bodyParser=require('body-parser')
require('dotenv').config()
const cors=require('cors')

const authRoutes=require('./routes/authRouters')

const app=express();

const connect =require('./connection/db')
connect(); // function call to connect with database
app.use(bodyParser.json())
app.use(cors())

app.use('/',authRoutes)
// app.use("/",require('./routes/admin_routers'))
// app.use("/",require('./routes/website_routers'))




const PORT=process.env.PORT || 4000 ;
app.listen(PORT,()=>{
     console.log(`Your app is running at Port ${PORT}`)

})
