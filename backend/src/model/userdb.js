const mongoose=require("mongoose");
const { Schema } = mongoose;
const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
        },
        password:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        mobile:{
            type:Number 
        },
        address:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"addresses" 
        }],
        paymentInformation:[{
           type:mongoose.Schema.Types.ObjectId,
           ref:"payment_information" 
        }],
        ratings:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }],
        reviews:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }],
        createDate:{
            type:Date,
            default:Date.now()

        }
})
 
const Users = mongoose.model("users", userSchema);
module.exports=Users;
