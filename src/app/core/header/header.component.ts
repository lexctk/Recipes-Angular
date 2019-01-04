import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../authentication/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../../recipes/recipe.service';
import { Recipe } from '../../recipes/recipe.model';
import { Observable } from 'rxjs';
import * as fromApp from '../../ngrx/app.reducers';
import * as fromAuth from '../../authentication/ngrx/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authState: Observable<fromAuth.State>;

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSave() {
    this.dataStorageService.updateRecipes().subscribe();
  }

  onFetch() {
    this.dataStorageService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
