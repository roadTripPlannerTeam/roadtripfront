import { TodolistPageComponent } from './todolist-page/todolist-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistFormComponent } from './todolist-page/todolist-form/todolist-form.component';
import { BudgetComponent } from './budget/budget.component';
import { ConversionComponent } from './manage-page/conversion/conversion.component';

const routes: Routes = [

  {path: 'todolists', component: TodolistPageComponent},
  {path:'', redirectTo: 'todolists', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
