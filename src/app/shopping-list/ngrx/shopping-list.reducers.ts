import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editIngredient: Ingredient;
  editIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ],
  editIngredient: null,
  editIndex: -1
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    }
    case ShoppingListActions.ADD_INGREDIENTS: {
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    }
    case ShoppingListActions.SET_INGREDIENT: {
      const oldIngredient = state.ingredients[state.editIndex];
      const newIngredient = {
        ...oldIngredient,
        ...action.payload.ingredient
      };
      const ingredients = [...state.ingredients];
      ingredients[state.editIndex] = newIngredient;
      return {
        ...state,
        ingredients: ingredients,
        editIngredient: null,
        editIndex: -1
      };
    }
    case ShoppingListActions.REMOVE_INGREDIENT: {
      const ingredients = [...state.ingredients];
      ingredients.splice(state.editIndex, 1);
      return {
        ...state,
        ingredients: ingredients,
        editIngredient: null,
        editIndex: -1
      };
    }
    case ShoppingListActions.START_EDIT: {
      return {
        ...state,
        editIndex: action.payload,
        editIngredient: {...state.ingredients[action.payload]}
      };
    }
    case ShoppingListActions.STOP_EDIT: {
      return {
        ...state,
        editIngredient: null,
        editIndex: -1
      };
    }
    default:
      return state;
  }
}
