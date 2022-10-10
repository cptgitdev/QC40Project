import { combineReducers } from "redux";
import loginReducer,{LoginState} from "./login.reducer";

export default combineReducers({
    loginReducer
});

export interface RootReducer{
    loginReducer:LoginState
}