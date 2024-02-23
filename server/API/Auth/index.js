import express from 'express'

// Models
import { userModel } from '../../database/user'
import passport from 'passport'
import { validateSignin, validateSignup } from '../../Validation/auth'

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
         await validateSignup(req.body.credentials) //  Validation code
        
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

Router.post('/signin',async(req,res)=>{
    try {
        await validateSignin(req.body.credeentials)
        const user =  await userModel.findByEmailAndPassword(req.body.credentials)

        const token = user.getjwtToken()
        
        return res.status(200).json({token,status:"success"})
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

// ////////////////////////////////////////////////////////////////        ////////////////////////////////////////////////////////////////////////////

/*
Route       /google
Des         google sign in
Params      none
Access      Public
Method      Get
*/

Router.get('/google',passport.authenticate("google",{scope:
    ['https://www.googleapis.com/auth/userinfo.profile',
    'email']
}))

// ////////////////////////////////////////////////////////////////        ////////////////////////////////////////////////////////////////////////////

/*
Route       /google/callback
Des         google sign in callbacks
Params      none
Access      Public
Method      Get
*/

Router.get('/google/callback',passport.authenticate("google",{failureRedirect:'/'}),(req,res)=>{
    return res.json({
        token: req.session.passport.user.token
    })
})

export default Router