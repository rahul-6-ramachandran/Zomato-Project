import axios from "axios";

// Redux Type

import { GET_IMAGE } from "./image.type";

export const getImage = (_id)=> async(dispatch)=>{
    try {
        const restaurantList = await axios({
            method:"GET",
            url:`http://localhost:5173/image/${_id}`

        })
        return dispatch({type : GET_IMAGE , payload: Image.data})
    } catch (error) {
        return dispatch({type : "ERROR" , payload: error})
    }
}