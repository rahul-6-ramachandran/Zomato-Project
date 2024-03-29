import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const INITIAL_STATE = {
    images:[]
}

export const getImage = createAsyncThunk('images/fetchRestaurant', async (_id)=>{
        const imageList = await axios({
            method:"GET",
            url:`http://localhost:4000/image/${_id}`

        })
        return imageList.data
    })

export const postImage = createAsyncThunk('images/postImage',async(_id)=>{
    
        await axios({
            method:"POST",
            url:`http://localhost:4000/image/${_id}`,
            data : {photo}
        })
    })

    
    //
const imageSlice = createSlice({
    name : 'images',
    initialState : INITIAL_STATE,
    extraReducers : (builder)=>{
        builder.addCase(getImage.fulfilled,(state,action)=>{
          return{
            ...state,
            images: action.payload
          } 
        })
        builder.addCase(postImage.fulfilled,(state,action)=>{
            return{
                ...state,
                images : [...state.image,action.payload]
            }
          })
    }

    

})

// export const {getAllRestaurants,getSpecificRestaurant} = restaurantSlice.actions
export default imageSlice.reducer