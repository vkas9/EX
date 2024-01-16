const express=require("express");
const app=express();

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.send("Hello Jee, kaise ho saare");
});
app.get("/profile/:username",(req,res)=>{
    res.send(`Hello from ${req.params.username}`);
});
app.listen(8000,()=>{
    console.log("Server Started at port no. 8000");
});