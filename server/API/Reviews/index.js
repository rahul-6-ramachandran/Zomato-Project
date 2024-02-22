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
        const reviews = await reviewModel.find({restaurant:req.params.id})
        await reviewModel.create({reviewData})
        return res.json({rreviews})
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
Router.post('/new',passport.authenticate("jwt") ,async (req,res)=>{
    try {
        const {_id}= req.session.passport.user._doc

        const {reviewData} = req.body
        await reviewModel.create({...reviewData,user:_id})
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