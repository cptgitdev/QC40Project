import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../apps/store";

export interface CounterState{
    value:number
}

const initialState:CounterState={
    value:0
}

export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increments:(state)=>{
            state.value+=1;
           
        },
        decrement:(state)=>{
            state.value-=1;
           
        },
        incrementByAmount:(state,actions:PayloadAction<number>)=>{
            state.value+=actions.payload;

        },
        clear:(state)=>initialState
    }
});

export const{increments,decrement,incrementByAmount,clear}=counterSlice.actions;
export const counterSelector=(state:RootState)=>state.counter;
export default counterSlice.reducer;
