import { WeatherComponent } from './informations/components/weather/weather.component';
import { TimeComponent } from './informations/components/time/time.component';
import { TransportComponent } from './informations/components/transport/transport.component';
import { MotsClesComponent } from './informations/components/mots-cles/mots-cles.component';
import { InfoGeneralesCountryComponent } from './informations/components/info-generales-country/info-generales-country.component';
import { ConditionGeneralCountryComponent } from './informations/components/condition-general-country/condition-general-country.component';
import { InformationCountryTitleComponent } from './informations/components/information-country-title/information-country-title.component';
import { InformationCityTitleComponent } from './informations/components/information-city-title/information-city-title.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoGeneraleCityComponent } from './informations/components/info-generale-city/info-generale-city.component';

const routes: Routes = [
  {path:"infoCountry",component :InformationCountryTitleComponent},
  {path:"infoCity",component :InformationCityTitleComponent},
  //ROUTER PAGE INFO COUNTRY TITLE
  {path:"conditionGeneral",component : ConditionGeneralCountryComponent},
  {path:"generaleInfoCountry", component : InfoGeneralesCountryComponent},
  {path:"motsCles",component:MotsClesComponent},
  //ROUTER PAGE INFO CITY TITLE
  {path:"transport",component : TransportComponent},
  {path:"generaleInfoCity", component : InfoGeneraleCityComponent},
  {path:"time",component:TimeComponent},
  {path:"weather",component:WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
