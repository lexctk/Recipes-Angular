import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { Store } from '@ngrx/store';
import * as fromApp from '../ngrx/app.reducers';
import * as fromAuth from '../authentication/ngrx/auth.reducers';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  dbURL = 'https://recipes-angularapp.firebaseio.com/recipes.json';

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private store: Store<fromApp.AppState>) {}

  getRecipes() {
    return this.httpClient.get<Recipe[]>(this.dbURL);
  }

  updateRecipes() {
    return this.store.select('auth').pipe(switchMap((authState: fromAuth.State) => {
      return this.httpClient.put(this.dbURL, this.recipeService.getRecipes(), {
        params: new HttpParams().set('auth', authState.token)
      });
    }));
  }
}
