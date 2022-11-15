import colorsReducer from "./sliceColors/sliceColors"
import { combineReducers } from "@reduxjs/toolkit";


export const rootReducer = combineReducers({
    colors: colorsReducer,
})