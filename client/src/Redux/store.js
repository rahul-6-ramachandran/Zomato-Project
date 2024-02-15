import { configureStore,applyMiddleware } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";

// redux middlewares

const middlewares = [thunk]

if(process.env.NODE_ENV=== "development"){
    const {logger} = 'redux-logger'
    middlewares.push(logger)
}
const store = configureStore({reducer:rootReducer},{},applyMiddleware(...middlewares))

export default store