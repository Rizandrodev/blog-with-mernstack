const mongoose=require("mongoose")
const {Schema}=require("mongoose")

const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    }
},{timestamps:true})

 const Blog=mongoose.model("blog",blogSchema)
module.exports= Blog