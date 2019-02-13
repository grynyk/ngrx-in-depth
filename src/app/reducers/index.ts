import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, AuthReducer } from '../auth/store/auth.reducer';

export interface AppState {
  auth:AuthState
}


export const reducers: ActionReducerMap<AppState> = {
  auth:AuthReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
