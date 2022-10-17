import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../apps/store";
import { LoginResult } from "../../types/auth-result";
import { User } from "../../types/user.type";
import {clear} from "../Counter/counterSlice"


export interface LoginState{
    result?:LoginResult
    isFetching:boolean,
    isError:boolean,
    isLogin:boolean,
    username:string
}
const initialState:LoginState={
    isFetching:false,
    isError:false,
    isLogin:false,
    username:""
}
export const authenSlice=createSlice({
    name:"authen",
    initialState,
    reducers:{
        login:(state,actions:PayloadAction<User>)=>{
           
            state.isError=false;
            state.username=actions.payload.username;
            state.isLogin=true;
            
        },
        logout:(state)=>initialState
    }
});

export const{login,logout}=authenSlice.actions;
export const authenSelector=(state:RootState)=>state.authen;
export default authenSlice.reducer;