const express=require("express");
const app=express();

app.use(express.json());
app.use(cors())


app.post("/signup",function(req,res){
    const {username,password}=req.body;

})
module.exports=app;