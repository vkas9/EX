const express=require("express");
const app=express();

app.set("view engine","ejs");
app.use(express.static('./public'));
app.get("/",(req,res)=>{
    res.render("index",{age:13});
});
app.get("/contact",(req,res)=>{
    res.render("contact",{age:17});
});
app.get("/error",(req,res)=>{
    throw Error("Something went wrong");
})
app.use(function errorHandler(err,req,res,next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500);
    res.render('error',{error:err});
})
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.post("/api/cars",(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully");
})
app.listen(8000,()=>{
    console.log("Server Started at port no. 8000");
});

const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/myDatabase",{
    
})
.then(()=>{
    console.log("Connection Successful")
})
.catch(()=>{
    console.log("Received an error!!")
})