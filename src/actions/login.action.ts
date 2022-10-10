import { HistoryProps } from "../types/history.type";
import { User } from "../types/user.type";
import {
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGOUT,
  server,
} from "../constants";
import { LoginResult } from "../types/auth-result";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
});

export const setLoginFailedToState=(payload:string)=>({
    type:LOGIN_FAILED,
    payload
});


export const login = (user: User) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoginFetchingToState());

      const result: boolean = true;

      if (result) {
        localStorage.setItem(server.TOKEN_KEY, "P@ssword1234567890");
        localStorage.setItem(server.REFRESH_TOKEN_KEY, "1234567890");
        dispatch(
          setLoginSuccessToState({
            result: 'Login Success',
            token: 'P@ssword1234567890',
            refreshToken: '1234567890',
            error: '',
          })
        );
        
      }else{
        dispatch(setLoginFailedToState('Invalid Account'));
      }

    } catch {
        dispatch(setLoginFailedToState(JSON.stringify({message:'error'})));
    }
  };
};
