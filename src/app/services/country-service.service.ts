66

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/countrie';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryServiceService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Country[]>(`${environment.URLCountry}/all`);
  }

  getOneData(event: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.URLCountry}/translation/${event}`);
  }
}
