import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PersonnageContainerComponent } from './personnage-container/personnage-container.component';
import { PersonnageListComponent } from './personnage-container/personnage-list/personnage-list.component';
import { PersonnageDetailComponent } from './personnage-container/personnage-detail/personnage-detail.component';
import { HttpClientModule } from "@angular/common/http";
import { PersonnageFormComponent } from './personnage-container/personnage-form/personnage-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonnageContainerComponent,
    PersonnageListComponent,
    PersonnageDetailComponent,
    PersonnageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
