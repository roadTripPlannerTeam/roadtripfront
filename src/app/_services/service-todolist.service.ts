
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todolist } from '../_models/todolist';

// const ROOT_URL : string = "http://localhost:8080/todolists/";

@Injectable({
  providedIn: 'root'
})

export class TodolistService {
  todolists!: Observable<Todolist[]>;

  constructor(private http: HttpClient) { }

  create(todolist: Todolist): Observable<Todolist> {
    return this.http.post<Todolist>(`${environment.URL}/todolists`, todolist);
  }

  findAll(): Observable<Todolist[]> {
    return this.http.get<Todolist[]>(`${environment.URL}/todolists`);
  }

  update(id: string, todolist: Todolist): Observable<Todolist> {
    return this.http.put<Todolist>(`${environment.URL}${id}`, todolist);
  }

  findById(id: string): Observable<Todolist> {
    return this.http.get<Todolist>(`${environment.URL}${id}`);
  }

  delete(id: string) {
    const body = {
      id: id
    }
    return this.http.delete(`${environment.URL}/todolists`, {body: body});
  }

}