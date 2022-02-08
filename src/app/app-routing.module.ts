import { ManageTripComponent } from './manage-page/page/manage-trip/manage-trip.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "managetrip", component: ManageTripComponent},
  //{path: "todolist", component: },
  //{path: "budget", component:},
  //{path: "conversion", component:},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
