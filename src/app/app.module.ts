import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { NotYetSignupComponent } from './not-yet-signup/not-yet-signup.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    FormSignupComponent,
    ConfirmButtonComponent,
    NotYetSignupComponent,
    HeaderAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
