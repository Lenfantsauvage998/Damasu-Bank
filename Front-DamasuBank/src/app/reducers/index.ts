import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { TransaccionReducer } from '../Store/Transactions.reducers';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  TRANSACTIONS: TransaccionReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
