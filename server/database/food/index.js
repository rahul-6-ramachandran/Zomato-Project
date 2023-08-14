import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String,required:true},
    descript : {type:String,required:true},
    isVeg : {type:Boolean,required:true},
    isContainsEgg : {type:Boolean,required:true},
    category : {type:String,required: true},
    photos : {
        type: mongoose.Types.ObjectId,
        ref : "Images"
    },
    price : {type:Number,default:150},
    addOns : { type : mongoose.Types.ObjectId, ref : "Foods"},
    restaurant: { type : mongoose.Types.ObjectId, ref : "Restaurants", required:true}
})

export const foodModel = mongoose.model('Foods',foodSchema)