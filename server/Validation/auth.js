// Joi library is used to validate the credentials.
import joi from "joi"

export const validateSignup = (userData)=>{
    const Schema = joi.object({
        fullname : joi.string().required().min(5),
        email : joi.string().email().required(),
        password : joi.string().min(5),
        address : joi.array().items(joi.object({
            details : joi.string(),
            for : joi.string()
        })),
        phoneNumber : joi.number()
        
    })
    return Schema.validateAsync(userData)
} 

export const validateSignin = (userData)=>{
    const Schema = joi.object({
        
        email : joi.string().email().required(),
        password : joi.string().required().min(5),
       
    })
    return Schema.validateAsync(userData)
} 