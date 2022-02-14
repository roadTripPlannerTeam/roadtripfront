import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Position } from '../models/position';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Position[]> {
    return this.http.get<Position[]>(`${environment.URL}/positions`);
  }

  create(position: Position): Observable<Position> {
    return this.http.post<Position>(`${environment.URL}/positions`, position)
  }

  delete(id: number): Observable<Position> {
    return this.http.delete<Position>(`${environment.URL}/positions/${id}`)
  }

  // modify(position: Position): Observable<Position> {
  //   return this.http.put<Position>(`${environment.URL}/positions/${position.id}`, Position)
  // }
}

