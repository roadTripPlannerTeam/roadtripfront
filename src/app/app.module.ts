import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { NotYetSignupComponent } from './not-yet-signup/not-yet-signup.component';
import { NotYetSigninComponent } from './not-yet-signin/not-yet-signin.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSignupComponent,
    ConfirmButtonComponent,
    NotYetSignupComponent,
    HeaderAuthComponent,
    SigninComponent,
    SignupComponent,
    FormSigninComponent,
    NotYetSigninComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
