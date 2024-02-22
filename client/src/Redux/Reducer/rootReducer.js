import { combineReducers } from "redux";
import restaurantRedcer from "./restaurant/restaurantSlice";
import ImageReducer from "./image/imageSlice";
import reviewsReducer from "./review/reviewSlice"
import userReducer from "./user/userSlice";
import foodReducer from "./food/foodSlice"
import authReducer from "./Auth/AuthSlice"

 const rootReducer = combineReducers({
    restaurants : restaurantRedcer,
    images : ImageReducer,
    reviews : reviewsReducer,
    users : userReducer,
    foods : foodReducer,
    auths : authReducer
})

 export default rootReducer