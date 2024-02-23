import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
const INITIAL_STATE = {
    reviews:{}
}

export const getReviews = createAsyncThunk('reviews/getReviews',async(res_id)=>{
    const reviewList = await axios({
      method:"GET",
      url:`http://localhost:4000/reviews/${res_id}`

  })
  return reviewList.data
})
       

export const postReviews = createAsyncThunk('reviews/postReviews',async(reviewData)=>{
    await axios({
        method:"POST",
        url:"http://localhost:4000/reviews/new",
        data : {reviewData}
    })
}) 

    


const reviewSlice = createSlice({
    name : 'reviews',
    initialState : INITIAL_STATE,
    extraReducers : (builders)=>{
        builders.addCase(getReviews.fulfilled,(state,action)=>{
            return{
                ...state,
                reviews : action.payload
            }
        })
        builders.addCase(postReviews.fulfilled,(state,action)=>{
            return{
                ...state
            }
        })
    }
}) 

// export const {getReviews,postReviews} = reviewSlice.actions
export default reviewSlice.reducer