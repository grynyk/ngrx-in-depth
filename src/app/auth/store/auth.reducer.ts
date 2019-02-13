import { Action } from '@ngrx/store';
import { User } from '../../model/user.model';
import { AuthActions } from './auth.actions';
import { AuthActionTypes } from './auth.actions';

export interface AuthState {
  loggedIn:boolean,
  user:User
}

export const initialAuthState: AuthState = {
  loggedIn:false,
  user:undefined
};

export function AuthReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch(action.type){
    case AuthActionTypes.LoginAction:
      return{
        loggedIn: true,
        user: action.payload.user
      }
    case AuthActionTypes.LogoutAction:
      return{
        loggedIn: false,
        user: undefined
      }
    default:
      return state;
  }
}
