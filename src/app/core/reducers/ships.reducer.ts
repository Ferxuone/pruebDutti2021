import { createReducer, on } from '@ngrx/store';
import { setListInStore } from '../actions/ships.actions';

export const initialState = [];

const _shipsReducer = createReducer(
  initialState,
  on(setListInStore, (state, { ships }) => ([...state, ...ships]))
)

export function shipsReducer(state, action) {
  return _shipsReducer(state, action);
}