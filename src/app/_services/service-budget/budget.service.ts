import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from 'src/app/_models/budget';

const ROOT_URL : string = "http://localhost:8080/budget";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  budget!: Observable<Budget[]>;

  constructor(private http: HttpClient) { }

  create(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(ROOT_URL, budget);
  }

  findAll(): Observable<Budget[]> {
    return this.http.get<Budget[]>(ROOT_URL);
  }

  update(id: string, budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`ROOT_URL/${id}`, budget);
  }

  findById(id: string): Observable<Budget> {
    return this.http.get<Budget>(`ROOT_URL/${id}`);
  }

  delete(id: string): Observable<Budget> {
    return this.http.delete<Budget>(`ROOT_URL/${id}`);
  }
}
