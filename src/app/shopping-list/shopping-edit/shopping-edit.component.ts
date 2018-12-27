import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Ingredient} from '../../shared/ingredient.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  shoppingListForm: FormGroup;
  editMode = false;
  editIndex: number;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null, [Validators.required, Validators.min(0)])
    });
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editIndex = index;
      this.editIngredient = this.shoppingListService.getIngredient(index);
      this.shoppingListForm.setValue({
        'ingredientName': this.editIngredient.ingredientName,
        'ingredientAmount': this.editIngredient.ingredientAmount
      });
    });
  }

  onSubmit() {
    console.log(this.shoppingListForm.value);
    const newIngredient = new Ingredient(this.shoppingListForm.value.ingredientName, this.shoppingListForm.value.ingredientAmount);

    if (this.editMode) {
      this.shoppingListService.setIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.shoppingListForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.removeIngredient(this.editIndex);
    this.onClear();
  }
}
