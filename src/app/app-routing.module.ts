import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { CanDeactivateGuard } from './recipes/recipe-edit/can-deactivate-guard.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: '', component: RecipeStartComponent},
      {path: 'new', canActivate: [AuthGuardService], component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard]},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', canActivate: [AuthGuardService], component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard]}
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
