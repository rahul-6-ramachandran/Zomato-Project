import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    city:{type:String,required:true},
    address: {type:String,required:true},
    mapLocation : {type:String,required:true},
    cuisine: [String],
    restaurantTimings : String,
    contactNumber:Number,
    Website: String ,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String], 
    menuImages : {type:mongoose.Types.ObjectId,
    ref:"Images"},
    menu : {
        type:mongoose.Types.ObjectId,
        ref:"Menus"
    },
    reviews: [{type:mongoose.Types.ObjectId, ref:"Reviews"}]
},{timestamps:true})

export const restaurantModel = new mongoose.model("Restaurants",restaurantSchema)