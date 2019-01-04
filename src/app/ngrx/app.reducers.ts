import * as fromShoppingList from '../shopping-list/ngrx/shopping-list.reducers';
import * as fromAuth from '../authentication/ngrx/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducers,
  shoppingList: fromShoppingList.shoppingListReducer
};
