import express from 'express'
import passport from 'passport'

// Models
import { userModel } from '../../database/Models'

const Router = express.Router()


/*
Route       /
Des         Get User Data
Params      _id
Access      Public
Method      GET
*/
Router.get('/:_id', async (req,res)=>{
    try {
        const {_id} = req.params
    const getUser = await userModel.findById(_id)
    return res.json({user:getUser})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
})

/*
Route       /update
Des         Get User Data
Params      _id
Body        UserData
Access      Public
Method      PUT
*/
Router.put('/update/_id', async(req,res)=>{
    try {
        const {_id} = req.params
        const {userData} = req.body
        const updateUserData = await userModel.findByIdAndUpdate(_id,{$set:userData},{new:true})
        return res.json({user:updateUserData})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
  
})