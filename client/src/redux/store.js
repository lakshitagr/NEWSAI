import { configureStore } from "@reduxjs/toolkit"; 
import loadingReducer from './slice/LoadingSlice.js'
const store = configureStore({
    reducer : {
     laoding : loadingReducer
    }
})

export default store