import { addFavourite, removeFavourite } from './action';
import { createReducer, on } from '@ngrx/store';

const state:number = 0
// state = state.length
export const reducer = createReducer(state, on(addFavourite, (state) => state + 1), on(removeFavourite, (state) => state - 1))