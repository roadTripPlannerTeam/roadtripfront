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
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DateAdapter, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

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
    BrowserAnimationsModule,
    RouterModule,
    GooglePlaceModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    NgxMapboxGLModule.withConfig({
      accessToken: environment.mapKey, // Optional, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: environment.mapKey // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    }),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
