require("dotenv").config()
const express=require("express")

const cors=require("cors")
const mongoose= require("mongoose")
const app=express()
const Blogroutes=require("./routes/blogRoutes")
app.use(express.json())
app.use(cors())
app.use(Blogroutes)

mongoose.connect(process.env.BD_URL)
.then((result)=>{

}).catch(err=>console.log("erro"))
app.listen(3000,()=>console.log("server is running"))
