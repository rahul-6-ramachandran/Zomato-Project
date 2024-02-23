import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    fullname : {type : String,required : true},
    email : {type : String, required : true},
    password : {type : String},
    address : [{detail : {type : String},for : {type:String}}],
    phoneNumber : [{type:Number}]
},{timestamps:true},

{
    methods: {
        getjwtToken(){
            return jwt.sign({user:this._id.toString()},"zomatoApp")
        }
    }
}
)

userSchema.methods.getjwtToken = function(){
    return jwt.sign({user:this._id.toString()},"zomatoApp")
}

userSchema.statics.findByEmailAndPhone = async ({email,phoneNumber})=>{
    const checkUserByEmail = await userModel.findOne({email})
    const checkUserByPhone = await userModel.findOne({phoneNumber})
    if(checkUserByEmail || checkUserByPhone){
        throw new Error("User already exist...!")
    }
    return false
}

userSchema.statics.findByEmailAndPassword = async ({email,password})=>{
    
    const user = await userModel.findOne({email})
    if(!user){
        throw new Error("User Does Not exist...!")
    }

    const doesPasswordMatch = await bcrypt.compare(password, user.password)
    if(!doesPasswordMatch){
        throw new Error("Invalid Password")
    }
    return user
} 

userSchema.pre("save",function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error)
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error)
            user.password = hash
        return next()
    })
        })
})

export const userModel = mongoose.model("Users",userSchema)
