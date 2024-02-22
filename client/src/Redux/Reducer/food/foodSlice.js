import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
const INITIAL_STATE = {
    food:[]
}

export const getFood = createAsyncThunk('food/getFood',async(res_id)=>{
    const menu = await axios({
      method:"GET",
      url:`http://localhost:4000/menu/list/${res_id}`

  })
  return menu.data
})
       

export const getfoodById = createAsyncThunk('reviews/postReviews',async(foodId)=>{
    const food = await axios({
        method:"GET",
        url:`http://localhost:4000/food/${foodId}`

    })
    return food.data
}) 

    


const foodSlice = createSlice({
    name : 'food',
    initialState : INITIAL_STATE,
    extraReducers : (builders)=>{
        builders.addCase(getFood.fulfilled,(state,action)=>{
            return{
                ...state,
                food : action.payload
            }
        })
        builders.addCase(getfoodById.fulfilled,(state,action)=>{
            return{
                ...state,
                food : action.payload
            }
        })
    }
}) 

// export const {getReviews,postReviews} = reviewSlice.actions
export default foodSlice.reducer