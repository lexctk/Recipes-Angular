import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  dbURL = 'https://recipes-angularapp.firebaseio.com/recipes.json';

  constructor(private http: HttpClient,
              private recipeService: RecipeService) {}

  getRecipes() {
    return this.http.get(this.dbURL);
  }

  updateRecipes() {
    return this.http.put(this.dbURL, this.recipeService.getRecipes());
  }
}
