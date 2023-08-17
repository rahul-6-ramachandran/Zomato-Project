import express from 'express'

// Models
import { userModel } from '../../database/user'

const Router = express.Router()
// ////////////////////////////////////////////////////////////////        ////////////////////////////////////////////////////////////////////////////
/*
Route       /signup
Des         New User Registration
Params      none
Access      Public
Method      POST
*/

Router.post('/signup',async(req,res)=>{
    try {
        
        await userModel.findByEmailAndPhone(req.body.credentials)

        const newUser = await userModel.create(req.body.credentials)
        
        const token = newUser.getjwtToken()
        
        return res.status(200).json({token,status:"success"})
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }
})

// ////////////////////////////////////////////////////////////////        ////////////////////////////////////////////////////////////////////////////

/*
Route       /signin
Des         Signin with Email and Password
Params      none
Access      Public
Method      POST
*/

Router.get('/signin',async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


export default Router