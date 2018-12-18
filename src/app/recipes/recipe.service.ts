import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Homemade Pizza',
      'Super awesome pizza!',
      'https://www.simplyrecipes.com/wp-content/uploads/2007/01/homemade-pizza-horiz-a-1200.jpg',
      [
        new Ingredient('Pepperoni', 13),
        new Ingredient('Mushrooms', 15)]),
    new Recipe(
      'Apple Pie',
      'Traditional Apple Pie!',
      'https://img1.southernliving.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/10/main/arkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg?itok=e6AfBEXc',
      [
        new Ingredient('Apples', 5),
        new Ingredient('Eggs', 6)])
  ];

  constructor() { }

  getRecipes() {
    // get a copy
    return this.recipes.slice();
  }
}
