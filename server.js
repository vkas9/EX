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
app.listen(8000,()=>{
    console.log("Server Started at port no. 8000");
});