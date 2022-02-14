import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stage } from '../models/stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Stage[]> {
    return this.http.get<Stage[]>(`${environment.URL}/stages`);
  }

  create(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(`${environment.URL}/stages`, stage)
  }

  delete(id: number): Observable<Stage> {
    return this.http.delete<Stage>(`${environment.URL}/stages/${id}`)
  }

  // modify(position: Stage): Observable<Stage> {
  //   return this.http.put<Stage>(`${environment.URL}/stages/${stage.id}`, Stage)
  // }


}
