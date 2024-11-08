const { raw } = require("body-parser");
const mongoose=require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required:true
    }
    ,
    product:{
        type: Schema.Types.ObjectId,
        ref: 'products',
        required:true
        }
        ,
        rating:{
            type:Number,
            required:true

        },
        createDate:{
            type:Date,
            default:Date.now()

        }
})
const Rating = mongoose.model('ratings', ratingSchema); 
module.exports=Rating;