const express=require("express")
const app=express()
const Blog = require("./../models/blog.model")

app.use(express.json())
const router=express.Router()


router.get("/get-all",async(req,res)=>{
	try{
		const blogs=await Blog.find()
		res.status(201).send({count:blogs.length, data:blogs})
	}catch(err){
		console.log("erro ")
        res.status(400).send({"error":err})

	}
})

router.get("/blog/:id",async(req,res)=>{
	try{
		const id=req.params.id;
		const blog=await Blog.findById(id)
		if (!blog) {
			return res.status(404).send({ message: "Blog not found" });
		  }
		res.status(201).send({blog})
	}catch(err){
		res.status(400).send({"error":err})
	}
})

router.post("/create-blog",async(req,res)=>{
	try{
		const data=req.body
		const blog=new Blog(data)
		const response=await blog.save()
		console.log(response)
		res.status(201).send(response)
	}catch(err){
		res.status(400).send({"error":err})
		console.log(err)
	}
})

router.delete("/blog/:id",async(req,res)=>{
	try{
		const id=req.params.id;
		const blog=await Blog.findByIdAndDelete(id)
		if (!blog) {
			return res.status(404).send({ message: "Blog not found" });
		  }
		res.status(201).send({"message":` user with ${id} was deleted `})
	}catch(err){
		console.log("erro ")
	}
})

router.put("/blog/:id",async(req,res)=>{
	try{
		const id=req.params.id;
		const data=req.body
		const blogUpadte=await Blog.findByIdAndUpdate(id,data)
		res.status(201).send({blogUpadte})
	}catch(err){
		console.log("erro ")
	}
})


module.exports=router