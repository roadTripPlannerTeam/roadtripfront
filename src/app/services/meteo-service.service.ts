import { Observable } from 'rxjs';

import { Weather } from './../models/weather';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoServiceService {

  constructor(private http : HttpClient) { }

  getWeath(name:string){ 
  return this.http.get<Weather>(`${environment.URLWeatherFirst}${name}${environment.URLWeatherLast}${environment.APIKEY}`);
  }
}


