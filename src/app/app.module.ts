import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';



import { MapContainerComponent } from './map-container/map-container.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map-container/map/map.component';
import { FormapdestinationComponent } from './map-container/form-mapdestination/formapdestination.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { environment } from '../environments/environment'
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { DateAdapter, MatOptionModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InformationComponent } from './informations/information/information.component';
import { LienInformationComponent } from './informations/components/lien-information/lien-information.component';
import { SelectOptionComponent } from './informations/components/select-option/select-option.component';
import { InformationCountryTitleComponent } from './informations/components/information-country-title/information-country-title.component';
import { MotsClesComponent } from './informations/components/mots-cles/mots-cles.component';
import { ConditionGeneralCountryComponent } from './informations/components/condition-general-country/condition-general-country.component';
import { InformationCityTitleComponent } from './informations/components/information-city-title/information-city-title.component';
import { InfoGeneraleCityComponent } from './informations/components/info-generale-city/info-generale-city.component';
import { TimeComponent } from './informations/components/time/time.component';
import { WeatherComponent } from './informations/components/weather/weather.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
import { FormSignupComponent } from './form-signup/form-signup.component';
import { HeaderAuthComponent } from './header-auth/header-auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotYetSignupComponent } from './not-yet-signup/not-yet-signup.component';
import { NotYetSigninComponent } from './not-yet-signin/not-yet-signin.component';
import { UserprofilComponent } from './userprofil/userprofil.component';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import { FormUpdateComponent } from './form-update/form-update.component';
import { FormSigninComponent } from './form-signin/form-signin.component';
import { ConversionComponent } from './manage-page/conversion/conversion.component';
import { TabviewManagerComponent } from './manage-page/tabview-manager/tabview-manager.component';

import {TabViewModule} from 'primeng/tabview';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ProgressBarModule} from 'primeng/progressbar';
import { BudgetComponent } from './budget/budget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodolistFormComponent } from './todolist-page/todolist-form/todolist-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderInformationComponent } from './header-information/header-information.component';
import { AffichageInformationComponent } from './affichage-information/affichage-information.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodolistListComponent } from './todolist-page/todolist-list/todolist-list.component';
import { TodolistPageComponent } from './todolist-page/todolist-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MapContainerComponent,
    HeaderComponent ,
    MapComponent,
    FormapdestinationComponent,
    FooterComponent,
    InformationComponent,
    HeaderInformationComponent,
    AffichageInformationComponent,
    LienInformationComponent,
    SelectOptionComponent,
    InformationCountryTitleComponent,
    MotsClesComponent,
    ConditionGeneralCountryComponent,
    InformationCityTitleComponent,
    InfoGeneraleCityComponent,
    TimeComponent,
    WeatherComponent,
    FormSignupComponent,
    NotYetSignupComponent,
    HeaderAuthComponent,
    SigninComponent,
    SignupComponent,
    FormSigninComponent,
    NotYetSigninComponent,
    UserprofilComponent,
    NavbarComponent,
    FormUpdateComponent,
    BudgetComponent,
    ConversionComponent,
    TabviewManagerComponent,
    TodolistPageComponent,
    TodolistFormComponent,
    TodolistListComponent,
    ],
    imports: [
      AvatarModule,
      ButtonModule,
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
      MatTabsModule,
      MatOptionModule,
      MatAutocompleteModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      BrowserModule,
      AppRoutingModule,
      TabViewModule,
      BrowserAnimationsModule,
      MatInputModule,
      MatTabsModule,
      InputTextareaModule,
      FontAwesomeModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      RouterModule,
      ProgressBarModule,
      MatDialogModule,
      MatInputModule,
      NgxMapboxGLModule.withConfig({
        accessToken: environment.mapKey, // Optional, can also be set per map (accessToken input of mgl-map)
        geocoderAccessToken: environment.mapKey // Optional, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
      }),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' },
    ButtonModule,
    AvatarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
