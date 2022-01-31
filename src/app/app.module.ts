import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './informations/information/information.component';
import { HeaderInformationComponent } from './informations/components/header-information/header-information.component';
import { AffichageInformationComponent } from './informations/components/affichage-information/affichage-information.component';
import { LienInformationComponent } from './informations/components/lien-information/lien-information.component';
import { SelectOptionComponent } from './informations/components/select-option/select-option.component';
import { InformationCountryTitleComponent } from './informations/components/information-country-title/information-country-title.component';
import { InfoGeneralesCountryComponent } from './informations/components/info-generales-country/info-generales-country.component';
import { MotsClesComponent } from './informations/components/mots-cles/mots-cles.component';
import { ConditionGeneralCountryComponent } from './informations/components/condition-general-country/condition-general-country.component';
import { InformationCityTitleComponent } from './informations/components/information-city-title/information-city-title.component';
import { InfoGeneraleCityComponent } from './informations/components/info-generale-city/info-generale-city.component';
import { TimeComponent } from './informations/components/time/time.component';
import { WeatherComponent } from './informations/components/weather/weather.component';
import { TransportComponent } from './informations/components/transport/transport.component';




@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    HeaderInformationComponent,
    AffichageInformationComponent,
    LienInformationComponent,
    SelectOptionComponent,
    InformationCountryTitleComponent,
    InfoGeneralesCountryComponent,
    MotsClesComponent,
    ConditionGeneralCountryComponent,
    InformationCityTitleComponent,
    InfoGeneraleCityComponent,
    TimeComponent,
    WeatherComponent,
    TransportComponent,
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
