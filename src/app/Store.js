import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/CounterSlice";
import addtoCart from "../features/AddCart";

export default configureStore({
reducer:{
    Counter:counterSlice,
    Cart:addtoCart
 }
})