import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 
const INITIAL_STATE = {
}

export const signIn = createAsyncThunk('auth/signIn',async(userData)=>{
    const user  = await axios({
        method:"POST",
        url:`http://localhost:4000/auth/signin`,
        data: {credentials:userData}
})
localStorage.setItem("zomatoUser",JSON.stringify({token:user.data.token}))
})

export const signUp = createAsyncThunk('auth/signUp',async(userData)=>{
    const user  = await axios({
        method:"POST",
        url:`http://localhost:4000/auth/signup`,
        data: {credentials:userData}
})
// console.log(user)
            localStorage.setItem("zomatoUser",JSON.stringify({token:user.data.token}))
})
const authSlice = createSlice({
    name : 'auth',
    initialState : INITIAL_STATE,
    extraReducers : (builders)=>{
        builders.addCase(signIn.fulfilled,(state,action)=>{
            return {
                ...state
            }

        })
        builders.addCase(signUp.fulfilled,(state,action)=>{
            return {
                ...state
            }


        })
    }
}) 



// export const googleAuth = (userData)=> async(dispatch)=>{
//     try {
//         const User = await axios({
//             method:"POST",
//             url:`http://localhost:4000/auth/signup`,
//             data: {credentials:userData}

//         })
//         localStorage.setItem("zomatoUser",JSON.stringify({token}))
//         return dispatch({type : SIGN_UP, payload: User.data})
//     } catch (error) {
//         return dispatch({type : "ERROR" , payload: error})
//     }
// }


// export const {getReviews,postReviews} = reviewSlice.actions
export default authSlice.reducer