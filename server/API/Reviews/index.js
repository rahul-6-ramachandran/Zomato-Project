import express, { Router } from "express";
import passport from "passport"

// Database model
import { reviewModel } from "../../database/Models";

const Router = express.Router()


/*
Route       /new
Des         Add new Review
Params      none
Access      Public
Method      POST
*/
Router.post('/new',async (req,res)=>{
    try {
        const {reviewData} = req.body
        await reviewModel.create({reviewData})
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
        const {_id} = req.params
        await reviewModel.findByIdAndDelete(_id)
        return res.json({review:"Successfully Deleted Review"})
    } catch (error) {
        
    }
})


export default Router