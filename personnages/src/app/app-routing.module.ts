import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnageContainerComponent } from './personnage-container/personnage-container.component';
import { PersonnageDetailComponent } from './personnage-container/personnage-detail/personnage-detail.component';
import { PersonnageFormComponent } from './personnage-container/personnage-form/personnage-form.component';

const routes: Routes = [
  { path: "", redirectTo: "personnages", pathMatch: "full" },
  { path: "personnages", component: PersonnageContainerComponent,
  children: [
    //TODO :
     { path: "new", component: PersonnageFormComponent },
    // { path: ":index/edit", component: PersonnageFormComponent },

    { path: ":index", component: PersonnageDetailComponent },
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
