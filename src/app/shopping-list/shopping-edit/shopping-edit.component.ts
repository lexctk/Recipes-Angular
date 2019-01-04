import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../ngrx/shopping-list.actions';
import * as fromShoppingList from '../ngrx/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  shoppingListForm: FormGroup;
  editMode = false;

  editIngredient: Ingredient;

  constructor(private store: Store<fromShoppingList.AppState>) {
  }

  ngOnInit() {
    this.shoppingListForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null, [Validators.required, Validators.min(0)])
    });

    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editIndex > -1) {
          this.editMode = true;
          this.editIngredient = data.editIngredient;
          this.shoppingListForm.setValue({
            'ingredientName': this.editIngredient.ingredientName,
            'ingredientAmount': this.editIngredient.ingredientAmount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onSubmit() {
    console.log(this.shoppingListForm.value);
    const newIngredient = new Ingredient(this.shoppingListForm.value.ingredientName, this.shoppingListForm.value.ingredientAmount);

    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.SetIngredient({ ingredient: newIngredient }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.RemoveIngredient());
    this.onClear();
  }
}
