const mongoose=require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderItems',
        required:true
    }],
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliveryDate:{
        type:Date,
        
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'addresses'
        
    },
    paymentDetails:{
       paymentmethod:{
        type:String,
       },
       transactionId:{
        type:String,
       },
       paymentStatus:{
        type:String,
        default:"Pending"
       }
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        required:true,
        default:"Pending"
    },
    totalItem:{
        type:Number,
        required:true
    },
    createDate:{
        type:Date,
        required:Date.now()
    },
})
const Order=mongoose.model("orders",orderSchema);
module.exports=Order;