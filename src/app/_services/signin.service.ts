import { UserSignin } from './../_models/user-signin';
import { User } from './../_models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) {  }

  signin(email: string, password: string){
    return this.http.post<any>(`${environment.URL}/api/auth/signin`, {email, password})
    // il faut encore gerer le token
  }
}