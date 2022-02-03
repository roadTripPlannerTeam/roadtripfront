import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { NotYetSignupComponent } from './not-yet-signup/not-yet-signup.component';
import { NotYetSigninComponent } from './not-yet-signin/not-yet-signin.component';
import { UserprofilComponent } from './userprofil/userprofil.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { FormUpdateComponent } from './form-update/form-update.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormSignupComponent,
    NotYetSignupComponent,
    HeaderAuthComponent,
    SigninComponent,
    SignupComponent,
    FormSigninComponent,
    NotYetSigninComponent,
    UserprofilComponent,
    NavbarComponent,
    FormUpdateComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ButtonModule,
    AvatarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
