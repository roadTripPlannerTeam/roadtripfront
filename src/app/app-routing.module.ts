import { TodolistPageComponent } from './todolist-page/todolist-page.component';
import { TodolistListComponent } from './todolist-page/todolist-list/todolist-list.component';
import { ManageTripComponent } from './manage-page/page/manage-trip/manage-trip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodolistFormComponent } from './todolist-page/todolist-form/todolist-form.component';
import { TodolistComponent } from './todolist-page/todolist/todolist.component';
import { BudgetComponent } from './budget/budget.component';
import { ConversionComponent } from './manage-page/conversion/conversion.component';

const routes: Routes = [
  {path:'', redirectTo: 'todolists', pathMatch: 'full'},
  {path: 'managetrip', component: ManageTripComponent},

  {path: 'todolists', component: TodolistPageComponent},
  {path: 'todolists/create', component: TodolistFormComponent},
  {path: 'todolists/update', component: TodolistComponent},
  
  {path: "budget", component: BudgetComponent},
  {path: "conversion", component: ConversionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
