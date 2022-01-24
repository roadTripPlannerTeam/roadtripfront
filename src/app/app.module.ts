import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSignupComponent } from './form-signup/form-signup.component';
import { ConfirmButtonComponent } from './confirm-button/confirm-button.component';
import { NotYetSignupComponent } from './not-yet-signup/not-yet-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSignupComponent,
    ConfirmButtonComponent,
    NotYetSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
