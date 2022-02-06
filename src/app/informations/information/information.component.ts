import { Weather } from './../../models/weather';
import { MeteoServiceService } from './../../services/meteo-service.service';
import { Country } from 'src/app/models/countrie';

import { Component, OnInit } from '@angular/core';
import { CountryServiceService } from 'src/app/services/country-service.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  public toto:string[]=[];
  //Display first page for information
  infoCountry: boolean = true;
  infoCity: boolean = false;

  //Variable for part Country
  infoCountryTitle: boolean = true;
  infogeneraleCountry: boolean = false;
  conditionGeneral: boolean = false;
  motcles: boolean = false;

  //Variable for part City
  infoGeneraleCity: boolean = false;
  infoCityTitle: boolean = false;
  time: boolean = false;
  transport: boolean = false;
  weather: boolean = false;

  // variable for getData & getOne data
  countrie: Country[] = [];
  allCountrie: Country[] = [];
  pays: string = "";
  country: string = "";
  value: string = "";
  countrydb: string = "";
  selectedCountry!: Country;
  selectedWeather! : Weather;
  weatherlike : Weather[]=[]
  //
  constructor(private serviceCountry: CountryServiceService , private serviceWeather: MeteoServiceService) { }

  ngOnInit(): void {
    this.getData();
    this.idSelect(this.country);
    this.getWeather();
  }

  // function for get all countries & get one country 
  private getData() {
    this.serviceCountry.getData().forEach(element => {
      this.countrie = element;
      //console.log(this.countrie);
    });
  }

  idSelect(event: string) {
    this.serviceCountry.getOneData(event).subscribe({
      next: (data) => {
        this.selectedCountry = data[0]; console.log(data);
      },
      error: err => console.log(err),
      complete: () => console.log("selectedCountry ok")
    })
  }
  
  //To get weather
   getWeather(){
     this.serviceWeather.getWeath().subscribe({//(data=>{console.log(data);
      next: (data) => {
        this.selectedWeather = data; console.log(data);
      },
      error: err => console.log(err),
      complete: () => console.log("selectedWeather ok")
    })


      
  }


  // Link infos villes & info country 
  hideInfoCity(event: boolean) {
    this.infoCityTitle = event;
    this.infoCountryTitle = true;
    this.infoGeneraleCity = event;
    this.time = event;
    this.transport = event;
    this.weather = event;
    this.infogeneraleCountry = event;
    this.conditionGeneral = event;
    this.motcles = event;
  }

  hideInfoCountry(event: boolean): void {
    this.infoCityTitle = true;
    this.infoCountryTitle = event;
    this.infogeneraleCountry = event;
    this.conditionGeneral = event;
    this.motcles = event;
    this.infoGeneraleCity = event;
    this.time = event;
    this.transport = event;
    this.weather = event;
  }

  //Function for display information country
  infoCount(event: boolean) {
    this.infoCountryTitle = event;
    this.infogeneraleCountry = true;
    console.log(event);
  }

  conditionGenerale(event: boolean) {
    this.infoCountryTitle = event;
    this.conditionGeneral = true
  }

  traduction(event: boolean) {
    this.infoCountryTitle = event;
    this.motcles = true;
  }

  //Function for display information city
  infoCityGenerale(event: boolean) {
    this.infoCityTitle = event;
    this.infoGeneraleCity = true;
  }

  timeCity(event: boolean) {
    this.infoCityTitle = event;
    this.time = true;
  }

  weatherCity(event: boolean) {
    this.infoCityTitle = event;
    this.weather = true;
  }

  transportCity(event: boolean) {
    this.infoCityTitle = event;
    this.transport = true;
  }


  cityTitleOpen(event: boolean) {
    if (this.infoGeneraleCity == true || this.time == true || this.transport == true || this.weather == true) {
      this.hideInfoCountry(event);
    } else if (this.infogeneraleCountry == true || this.conditionGeneral == true || this.motcles == true) {
      this.hideInfoCity(event)
    }
  }




}
