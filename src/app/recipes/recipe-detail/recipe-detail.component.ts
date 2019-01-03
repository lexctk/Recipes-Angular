import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  i: number;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.i = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.i);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping-list']).then();
  }

  onEditRecipe() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['edit'], {relativeTo: this.activatedRoute}).then();
    } else {
      this.router.navigate(['/login']).then();
    }

  }

  onDeleteRecipe() {
    if (this.authService.isAuthenticated()) {
      this.recipeService.removeRecipe(this.i);
      this.router.navigate(['/recipes']).then();
    } else {
      this.router.navigate(['/login']).then();
    }
  }
}
