import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { AuthGuardService } from '../authentication/auth-guard.service';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CanDeactivateGuard } from '../shared/can-deactivate-guard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

const recipesRoutes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', canActivate: [AuthGuardService], component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', canActivate: [AuthGuardService], component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
