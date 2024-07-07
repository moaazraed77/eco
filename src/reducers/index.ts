import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { reducer } from '../app/modules/store/reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  theReducer:reducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
