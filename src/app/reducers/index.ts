import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, AuthReducer } from '../auth/store/auth.reducer';
import {storeFreeze} from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  // auth:AuthState
}


export const reducers: ActionReducerMap<AppState> = {
  auth:AuthReducer,
  router:routerReducer
};



export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
