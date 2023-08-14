import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname : {type : String,required : true},
    email : {type : String, required : true},
    email : {type : String},
    address : [{detail : {type : String},for : {type:String}}],
    phoneNumber : [{type:Number}]
})

export const userModel = mongoose.model("Users",userSchema)
