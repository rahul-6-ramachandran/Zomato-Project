import express from 'express'
import passport from 'passport'

// Models
import { menuModel,imageModel } from '../../database/Models'

const Router = express.Router()



/*
Route       /list
Des         Get all the list  based on Particular Restaurant
Params      _id
Access      Public
Method      GET
*/

Router.get('/list/:_id',async (req,res)=>{
    try {
        const {_id} = req.params
        const menu = await menuModel.findOne({_id})

        return res.json({menu})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
   
})

/*
Route       /images
Des         Get all the list  based on Particular Restaurant
Params      _id
Access      Public
Method      GET
*/

Router.get('/image/:_id',async (req,res)=>{
    try {
        const {_id} = req.params
        const menu = await imageModel.findOne({_id})

        return res.json({menu})
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
   
})