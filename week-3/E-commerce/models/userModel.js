import { Schema,model } from "mongoose";

const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:'product',
        //name of product model
    }
})
const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:true//add to index

    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    cart:{
        type:[cartSchema]
    },
})
export const userModel=model("user",userSchema)