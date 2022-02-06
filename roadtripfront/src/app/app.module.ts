import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ReactiveFormsModule } from '@angular/forms';
import { MapContainerComponent } from './map-container/map-container.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map-container/map/map.component';
import { FormapdestinationComponent } from './map-container/form-mapdestination/formapdestination.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    HeaderComponent ,
    MapComponent,
    FormapdestinationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
    GooglePlaceModule

    
  ] ,

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
