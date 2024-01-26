import joi from 'joi'

export const validateOrderDetails = (orderDetails) =>{
    const Schema = joi.object({
        food : joi.string().required(),
        quantity : joi.number().required(),
        paymode : joi.string().required(),
        status : joi.string().required(),
        paymentDetails : joi.array().items(joi.object({
            itemTotal: joi.number().required(),
            promo: joi.number().required(),
            tax:joi.number().required(),
        }))
            
    })
    return Schema.validateAsync(orderDetails)
}