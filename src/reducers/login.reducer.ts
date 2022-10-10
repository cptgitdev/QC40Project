import {LOGIN_FAILED,LOGIN_FETCHING,LOGIN_SUCCESS,LOGOUT} from "../constants";
import { LoginResult } from "../types/auth-result";

export interface LoginState{
    result?:LoginResult,
    isFetching:boolean,
    isError:boolean
}

const initialState:LoginState={
   isFetching:false,
   isError:false
};


export default (state=initialState,{type,payload}:any):LoginState=>{

    switch(type){
        case LOGIN_FETCHING:
            return {...state,isFetching:true,isError:false};
        case LOGIN_SUCCESS:
            return {...state,isFetching:false,isError:true};
        case LOGIN_FAILED:
            return {...state,isFetching:false,isError:true};
        case LOGOUT:
            return {...state,isFetching:false,isError:false,result:{refreshToken:"",token:"",result:""}}
        default:
            return state;
    }

}