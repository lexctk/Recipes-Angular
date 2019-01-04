import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../authentication/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  dbURL = 'https://recipes-angularapp.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  getRecipes() {
    return this.httpClient.get<Recipe[]>(this.dbURL);
  }

  updateRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put(this.dbURL, this.recipeService.getRecipes(), {
      params: new HttpParams().set('auth', token)
    });
  }
}
