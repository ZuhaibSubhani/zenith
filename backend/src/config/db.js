const mongoose =require("mongoose")

const connectDb=()=>{
    return mongoose.connect("mongodb://localhost:27017/zenithex1")
}
module.exports=connectDb;