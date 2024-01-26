import joi from "joi";

export const validateReview = (reviewDetails)=>{
    const Schema = joi.object({
        food: joi.string().required(),
        restaurant:joi.string().required(),
        user: joi.string().required(),
        rating: joi.string().required(),
        reviewText: joi.string().required(),
        isRestaurantReview : joi.boolean(),
        isFoodReview : joi.boolean(),
        photos: joi.array().items(joi.string)
    })
    return Schema.validateAsync(reviewDetails)
}