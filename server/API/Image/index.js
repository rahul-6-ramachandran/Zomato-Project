import express from "express";
import passport from "passport";

import { imageModel } from "../../database/Models";

const Router = express.Router()

Router.get('/:id',async (req,res)=>{
    try {
        const image = await imageModel.findById(req.params.id) 
        return res.json({image})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

export default Router