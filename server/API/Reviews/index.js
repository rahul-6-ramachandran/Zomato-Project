import express from 'express';
import passport from "passport"

// Database model
import { reviewModel } from "../../database/Models";
import { validateReview } from '../../Validation/review';
import { validateId } from '../../Validation/food';

const Router = express.Router()



/*
Route       /new
Des         Get all reviews
Params      restaurant_id
Access      Public
Method      GET
*/
Router.get('/:id',async (req,res)=>{
    try {
        // restaurant:req.params.id
        const res_id = '65d870b15a07db9bfb0b6524'
        const reviews = await reviewModel.find({restaurant:res_id})
        return res.json({reviews})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


/*
Route       /new
Des         Add new Review
Params      none
Access      Public
Method      POST
*/

// passport.authenticate("jwt")
Router.post('/new', async (req,res)=>{
    try {
        // req.session.passport.user._doc
        const _id=  '64ddf235afc4458d0839ab06'
        const res_id = '65d870b15a07db9bfb0b6524'
        
        console.log(req.body.reviewData)
        await reviewModel.create({...req.body.reviewData,user:_id,restaurant :res_id })
        return res.json({review:"Successfully Updated Review"})
    } catch (error) {
        return res.status(500).json({error:error.message})
       
    }
})


/*
Route       /delete
Des         delete a Review
Params      none
Access      Public
Method      DELETE
*/
Router.delete('/delete/:_id',async (req,res)=>{
    try {
        await validateId(req.params)
        const {_id} = req.params
        await reviewModel.findByIdAndDelete(_id)
        return res.json({review:"Successfully Deleted Review"})
    } catch (error) {
        
    }
})


export default Router