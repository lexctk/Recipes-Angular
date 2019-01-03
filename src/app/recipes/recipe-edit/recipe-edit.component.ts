import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CanComponentDeactivate} from './can-deactivate-guard.service';
import {Observable} from 'rxjs';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {
  id: number;
  editMode = false;
  changesSaved = false;
  recipeForm: FormGroup;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;

      let recipeName = '';
      let recipeDescription = '';
      let recipeImagePath = '';
      const recipeIngredients = new FormArray([]);

      if (this.editMode) {
        const recipe = this.recipeService.getRecipe(this.id);

        recipeName = recipe.name;
        recipeDescription = recipe.description;
        recipeImagePath = recipe.imagePath;

        if (recipe['ingredients']) {
          for (const ingredient of recipe.ingredients) {
            recipeIngredients.push(new FormGroup({
              'ingredientName': new FormControl(ingredient.ingredientName, Validators.required),
              'ingredientAmount': new FormControl(ingredient.ingredientAmount, [Validators.required, Validators.min(0)])
            }));
          }
        }
      }

      this.recipeForm = new FormGroup({
        'recipeName': new FormControl(recipeName, Validators.required),
        'recipeDescription': new FormControl(recipeDescription),
        'recipeImagePath': new FormControl(recipeImagePath, Validators.required),
        'recipeIngredients': recipeIngredients
      });

    });
  }

  onSubmit() {
    this.changesSaved = true;

    const recipe = new Recipe(this.recipeForm.value['recipeName'], this.recipeForm.value['recipeDescription'],
      this.recipeForm.value['recipeImagePath'], this.recipeForm.value['recipeIngredients']);

    if (this.editMode) {
      this.recipeService.setRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }

    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

  getIngredientControls() {
    return (<FormArray>this.recipeForm.get('recipeIngredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('recipeIngredients')).push(new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null, [Validators.required, Validators.min(0)])
    }));
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('recipeIngredients')).removeAt(index);
  }
}
