import { ManageTripComponent } from './manage-page/page/manage-trip/manage-trip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "managetrip", component: ManageTripComponent},
  //{path: "todolist", component: TodolistComponent},
  //{path: "todolist", component: TodolistFormComponent},
  //{path: "budget", component: BudgetComponent},
  //{path: "conversion", component: ConversionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
