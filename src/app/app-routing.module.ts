
import { UserprofilComponent } from './userprofil/userprofil.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { MapContainerComponent } from './map-container/map-container.component';
import { InformationComponent } from './informations/information/information.component';
import { TodolistPageComponent } from './todolist-page/todolist-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:'signup', component: SignupComponent },
  {path:'signin', component: SigninComponent },
  {path:'profil', component: UserprofilComponent },
  {path:'', component: SigninComponent ,pathMatch:"full"  },
  { path:'itinerary/create', component : MapContainerComponent  } ,
  { path:'destination/info', component : InformationComponent  } ,
  {path: 'todolists', component: TodolistPageComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
