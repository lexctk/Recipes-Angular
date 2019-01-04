import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../../authentication/auth.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../../shopping-list/ngrx/shopping-list.actions';
import * as fromApp from '../../ngrx/app.reducers';
import { Observable } from 'rxjs';
import * as fromAuth from '../../authentication/ngrx/auth.reducers';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  i: number;

  authState: Observable<fromAuth.State>;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.i = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.i);
    });
    this.authState = this.store.select('auth');
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
    this.router.navigate(['/shopping-list']).then();
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute}).then();
  }

  onDeleteRecipe() {
    this.recipeService.removeRecipe(this.i);
    this.router.navigate(['/recipes']).then();
  }
}
