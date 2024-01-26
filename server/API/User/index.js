import express  from 'express'
import passport from 'passport'

// Models
import { userModel } from '../../database/Models'
import { validateUpdateUser, validateUser } from '../../Validation/user'

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
        await validateUser(req.params)
        const {_id} = req.params
    const getUser = await userModel.findById(_id)
    return res.json({user:getUser})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
    
})

/*
Route       /update/id
Des         Get User Data
Params      _id
Body        UserData
Access      Public
Method      PUT
*/
Router.put('/update/_id', async(req,res)=>{
    try {
        await validateUpdateUser(req.body)
        const {_id} = req.params
        const {userData} = req.body
        const updateUserData = await userModel.findByIdAndUpdate(_id,{$set:userData},{new:true})
        return res.json({user:updateUserData})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
  
})

export default Router