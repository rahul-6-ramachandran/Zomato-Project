import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const INITIAL_STATE = {
    restaurants:[],
    selectedRestaurant : {}
} 


export const fetchRestaurant = createAsyncThunk('restaurants/fetchRestaurant', async ()=>{
        const restaurantList = await axios({
            method:"GET",
            url:"http://localhost:4000/restaurant"

        })
        return restaurantList.data
    })

export const fetchSpecificRestaurant = createAsyncThunk('restaurants/fetchSpecificRestaurant',async(_id)=>{
    
        const restaurantList = await axios({
            method:"GET",
            url:`http://localhost:4000/restaurant/${_id}`

        })
        return restaurantList.data
   
      
    })

    
    //
const restaurantSlice = createSlice({
    name : 'restaurants',
    initialState : INITIAL_STATE,
    extraReducers : (builder)=>{
        builder.addCase(fetchRestaurant.fulfilled,(state,action)=>{
          return{
            ...state,
            restaurants : action.payload
          } 
        })
        builder.addCase(fetchSpecificRestaurant.fulfilled,(state,action)=>{
            return{
                ...state,
                 selectedRestaurant : action.payload
            } 
          })
    }

    

})

// export const {getAllRestaurants,getSpecificRestaurant} = restaurantSlice.actions
export default restaurantSlice.reducer