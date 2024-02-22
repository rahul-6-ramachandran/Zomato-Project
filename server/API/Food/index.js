import express from 'express'
import passport from 'passport'

// Models
import { foodModel } from '../../database/food'
import { validateId ,validateCategory} from '../../Validation/food'

const Router = express.Router()


/*
Route       /r
Des         Get all the Food details based on Particular Restaurant
Params      _id
Access      Public
Method      GET
*/

Router.get('/r/:_id',async(req,res)=>{
    
    try {
        await validateId(req.params)
        const {_id} = req.params
    const food = await foodModel.find({restaurant:_id})
    return res.json({food})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


/*
Route       /:id
Des         Get Food  based on id
Params      _id
Access      Public
Method      GET
*/

Router.get('/r/:_id',async(req,res)=>{
    
    try {
      
        const {_id} = req.params
    const food = await foodModel.findById(_id)
    return res.json({food})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


/*
Route       /r
Des         Get all the Food details based on Particular Restaurant
Params      category
Access      Public
Method      GET
*/

Router.get('/r/:category',async(req,res)=>{
    
    try {
        await validateCategory(req.params)
        const {_id} = req.params
    const food = await foodModel.find({category:{$regex:category,$option:"i"}})
    return res.json({food})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router