import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private authService: AuthService) {
  }

  ngOnInit() {
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
