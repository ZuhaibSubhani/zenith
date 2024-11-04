const mongoose=require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
        
    },
    quantity:{
        type:Number,
        required:true,
        
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    }, 
    brand:{
        type:String,
    },
    sizes:[{
        name:{type:String},
        quantity:{type:Number}
    }],
    imageUrl:{
        type:String
    },
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'ratings'
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'reviews'
        }
    ],
    numRatings:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    createDate: {
        type: Date,
        default: Date.now
    }
    
})
const Product=mongoose.model("products",productSchema);
module.exports=Product; 