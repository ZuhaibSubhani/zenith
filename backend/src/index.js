const express=require("express");
const app=express();
const cors = require("cors");

const authRouters=require("./routes/auth.route");
const userRouter=require("./routes/user.route")

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to api",status:true})
})

app.use(express.json());
app.use(cors())

app.use("/auth",authRouters);
app.use("/users",userRouter);

module.exports=app;