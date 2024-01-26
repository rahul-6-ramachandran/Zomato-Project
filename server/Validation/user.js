import joi from 'joi'

export const validateUser = (userId)=>{
    const Schema = joi.object({
        _id : joi.string().required()
    })
    return Schema.validateAsync(userId)
}

export const validateUpdateUser = (userData)=>{
    const Schema = joi.object({
        fullname : joi.string().min(5),
        email : joi.string().email(),
        password : joi.string().min(5),
        address : joi.array().items(joi.object({
            details : joi.string(),
            for : joi.string()
        })),
        phoneNumber : joi.number()
    })
    return Schema.validateAsync(userData)
}