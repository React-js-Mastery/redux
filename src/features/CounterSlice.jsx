import { createSlice } from "@reduxjs/toolkit";

 export const CounterSlice=createSlice({
    name:'counter',
    initialState:{
        counter:0
    },
    reducers:{
        Increment:(state,action)=>{
            state.counter++;
        },
        Decrement:(state,action)=>{
            state.counter--;
        }

    }
})

export default CounterSlice.reducer;
export const {Increment, Decrement}=CounterSlice.actions;
