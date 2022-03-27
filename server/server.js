const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()

const authRoutes=require('./routes/authRoutes')
const PORT=process.env.PORT || 5000

const app=express()
app.use(express.json())
app.use(cors())

//register routes
app.use('/api/auth',authRoutes)

mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
    }
).catch((err)=>{
    console.log("Database connection failed. Server not started.")
})
