import { Weather } from './../../../models/weather';
import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/models/countrie';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  @Input() weather!: Weather;
  @Input() oneCount!: Country;
  
  url:string="";
  urlIcon:string=(`${environment.URLIcon}`)
  png:string=".png"
  temp!:number;
 
  constructor() {}

  ngOnInit(): void {
   this.getIconWeather();
   this.getTempWeather();
  }

  getIconWeather(){
    this.url = this.urlIcon +this.weather.weather[0].icon +this.png;
  }

  getTempWeather(){
    const tempRound = parseFloat(this.weather.main.temp);
    this.temp = Math.round(tempRound);
  }



}


