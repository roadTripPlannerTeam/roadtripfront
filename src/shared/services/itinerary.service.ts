import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itinerary } from '../models/itinerary';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ItineraryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(`${environment.URL}/itineraries`);
  }

  create(itinerary: Itinerary): Observable<Itinerary> {
    return this.http.post<Itinerary>(`${environment.URL}/itineraries`, itinerary)
  }

  delete(id: number): Observable<Itinerary> {
    return this.http.delete<Itinerary>(`${environment.URL}/itineraries/${id}`)
  }

  // modify(position: Itinerary): Observable<Itinerary> {
  //   return this.http.put<Itinerary>(`${environment.URL}/itinerary/${position.id}`, Itinerary)
  // }
}
