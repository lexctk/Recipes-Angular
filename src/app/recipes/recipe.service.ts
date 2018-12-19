import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Homemade Pizza',
      'Super awesome pizza!',
      '/assets/images/homemade-pizza.jpg',
      [
        new Ingredient('Pepperoni', 13),
        new Ingredient('Mushrooms', 15)]),
    new Recipe(
      'Apple Pie',
      'Traditional Apple Pie!',
      '/assets/images/apple_pie.jpg',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Eggs', 6)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // get a copy
    return this.recipes.slice();
  }

  getRecipe (id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList (ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
