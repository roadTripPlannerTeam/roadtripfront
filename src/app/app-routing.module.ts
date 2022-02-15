
import { UserprofilComponent } from './userprofil/userprofil.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapContainerComponent } from './map-container/map-container.component';

const routes: Routes = [

  {path:'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent },
  {path:'profil', component: UserprofilComponent },
  {path:'', component: SigninComponent },
  { path:'itinerary/create', component : MapContainerComponent  } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
