import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService,
              private dataStorageService: DataStorageService,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }

  onSave() {
    this.dataStorageService.updateRecipes().subscribe();
  }

  onFetch() {
    this.dataStorageService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipeService.setRecipes(recipes);
    });
  }
}
