import { Country } from 'src/app/models/countrie';
import { Weather } from './../models/weather';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

  countrie:Country[]=[]
  weather:Weather[]=[]
  tutu:string="${environment.URLWeatherFirst}";
  
  
  constructor(private http : HttpClient) { }

  getWeath(){ 
  return this.http.get<Weather>(`${environment.URLWeatherFirst}Paris${environment.URLWeatherLast}${environment.APIKEY}`);
  }
}


