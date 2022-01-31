import { User } from './../_models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {  }

  create(user: User):Observable<User>{
    return this.http.post<User>(`${environment.URL}/api/auth/signup`, user)
  }
}
