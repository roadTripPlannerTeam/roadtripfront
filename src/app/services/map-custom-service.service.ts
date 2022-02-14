
import { mapPositions } from './../models/mapPositions';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapCustomServiceService {

  constructor(private http:HttpClient) { }

  //recupere les postion de la bdd
  findAll(): Observable<mapPositions[]>{
    return this.http.get<mapPositions[]>(`${environment.URLBack}`);
  }

  
  findFirst(startCoordinate:string) {
    return this.http.get<mapPositions>(`${environment.URLMapBox}${startCoordinate} ${environment.APAIKEYMapBox}`)
  }

  findDestination(endCoordinate:string){
    return this.http.get<mapPositions>(`${environment.URLMapBox}${endCoordinate} ${environment.APAIKEYMapBox}`)
  }
}
