import express  from 'express';
import passport, { session } from "passport";

import {orderModel, userModel } from '../../database/Models'
import { validateId } from '../../Validation/food';
import { validateOrderDetails } from '../../Validation/orders';

const Router = express.Router()


/*
Route       /
Des         Get all the orders of a  Particular user
Params      _id
Access      Public
Method      GET
*/
Router.get('/:_id', passport.authenticate("jwt",{session:false})  ,async (req,res)=>{
    try {
        await validateId(req.params)
        const {_id} = req.params
        const getOrders = await userModel.findOne({user: _id})
        if(!getOrders) {
            return res.status(404).json({error : "Order not Found"})
        }
        return res.status(200).json({orders:getOrders})
       
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})


/*
Route       /new
Des         Add new Order
Params      _id
Access      Public
Method      Post
*/
Router.post('/new/:_id',async (req,res)=>{
    try {
        await validateOrderDetails(req.body)
        const {_id} = req.params
        const {orderDetails} = req.body
        const addNewOrder = orderModel.findOneAndUpdate({user:_id},{$push:{orderDetails}},{new:true})
        if(!addNewOrder) {
            return res.status(404).json({error : "Order not Found"})
        }
        return res.status(200).json({orders :addNewOrder})
       
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router