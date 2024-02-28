import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
const INITIAL_STATE = {
    user:{}
}

export const getUser = createAsyncThunk('user/getUser',async(_id)=>{
    const user = await axios({
      method:"GET",
      url:`http://localhost:4000/user/${_id}`

  })
  return user.data
})
       

export const getmySelf = createAsyncThunk('user/getmySelf',async()=>{
    const user = await axios({
        method:"GET",
        url:`http://localhost:4000/user/`
        }) 
        return user.data

    })

    


const userSlice = createSlice({
    name : 'user',
    initialState : INITIAL_STATE,
    extraReducers : (builder)=>{
        builder.addCase(getUser.fulfilled,(state,action)=>{
            return {
                ...state 
            }
        })
        builder.addCase(getmySelf.fulfilled,(state,action)=>{
            return {
                ...state,
                user : action.payload
            }
        })
    }
}) 

// export const {getReviews,postReviews} = reviewSlice.actions
export default userSlice.reducer