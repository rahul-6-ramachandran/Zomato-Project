import { combineReducers } from "redux";

import restaurant from "./restaurant/restaurant.reducer";
import ImageReducer from "./image/image.reducer";
 const rootReducer = combineReducers({restaurant,ImageReducer})

 export default rootReducer