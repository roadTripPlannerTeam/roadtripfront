import { Itinerary } from './../../shared/models/itinerary';

import { mapPositions } from './../models/mapPositions';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapCustomServiceService {

  constructor(private http:HttpClient) { }

  //recupere les postion de la bdd
  findAll(): Observable<mapPositions[]>{
    return this.http.get<mapPositions[]>(`${environment.URLItinerary}`);
  }

  
  findFirst(startCoordinate:string) {
    return this.http.get<mapPositions>(`${environment.URLMapBox}${startCoordinate} ${environment.APAIKEYMapBox}`)
    .pipe(map((res) => {
     // console.log( res);
      return res.features[0].context
    }))
  }

  findDestination(endCoordinate:string){
    return this.http.get<mapPositions>(`${environment.URLMapBox}${endCoordinate} ${environment.APAIKEYMapBox}`)
    .pipe(map((res) => {
     // console.log( res);
      return res.features[0].context
    }))
  }

  findById(id:string) : Observable<mapPositions>{
    return this.http.get<mapPositions>(`${environment.URLItinerary}/${id}`);
  }
}
