import { Todolist } from './../../_models/todolist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// const ROOT_URL : string = "http://localhost:8080/todolists/";

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  todolists!: Observable<Todolist[]>;

  constructor(private http: HttpClient) { }

  create(todolist: Todolist): Observable<Todolist> {
    return this.http.post<Todolist>(`${environment.URL_TODO}`, todolist);
  }

  findAll(): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(`${environment.URL_TODO}`);
  }

  update(id: string, todolist: Todolist): Observable<Todolist> {
    return this.http.put<Todolist>(`${environment.URL_TODO}${id}`, todolist);
  }

  findById(id: string): Observable<Todolist> {
    return this.http.get<Todolist>(`${environment.URL_TODO}${id}`);
  }

  delete(id: string) {
    const body = {
      id: id
    }
    return this.http.delete(`${environment.URL_TODO}`, {body: body});
  }

}
