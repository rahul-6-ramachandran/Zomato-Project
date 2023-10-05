import express, { Router } from "express";
import passport from "passport"

// Database model
import { restaurantModel } from "../../database/restaurant";

const Router = express.Router()


/*
Route       /
Des         Get all the restaurant details based on a city
Params      none
Access      Public
Method      GET
*/

Router.get('/',async (req,res)=>{
    try {
    const { city } = req.query
    const allrestaurant = await restaurantModel.find({city})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route       /
Des         Get individual restaurant details based on id
Params      none
Access      Public
Method      GET
*/

Router.get('/:_id',async (req,res)=>{
    try {
    const { _id } = req.params
    const restaurant = await restaurantModel.findOne({_id})

    if(!restaurant){
       return res.status(404).json({error:"Restaurant not Found"})
    }
    return res.json({restaurant})

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
   

})

/*
Route       /
Des         Get individual restaurant details based on id
Params      none]
Body        searchString
Access      Public
Method      GET
*/

Router.get('/search',async (req,res)=>{
    try {
        const {searchString} = req.body
        const restaurants =  await restaurantModel.find({name:{$regex : searchString, $options : "i"}})
        if(!restaurants){
            return res.status(404).json({error:`No Results For ${searchString} Found`})
        }
        return res.json({restaurants})
    
        } catch (error) {
            return res.status(500).json({error:error.message})
        }
})