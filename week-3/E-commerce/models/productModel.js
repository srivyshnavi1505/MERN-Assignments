import { Schema,model } from "mongoose";
const prodSchema=new Schema({
    productName:{
        type:String,
        required:[true,"productName required"]
    },
    price:{
        type:Number,
        required:[true,"price required"]
    },
    brand:{
        type:String,
        required:[true,"brand required"]
    },
},{
        strict:"throw",
        timestamps:true,
        versionKey:false
    
});
export const productModel = model("product",prodSchema) 