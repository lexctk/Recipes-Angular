import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  dbURL = 'https://recipes-angularapp.firebaseio.com/recipes.json';

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  getRecipes() {
    return this.http.get(this.dbURL);
  }

  updateRecipes() {
    const token = this.authService.getToken();
    return this.http.put(this.dbURL + '?auth=' + token, this.recipeService.getRecipes());
  }
}
