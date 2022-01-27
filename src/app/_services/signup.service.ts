import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const  ROOT_URL:string ="http://localhost:8080/api/auth/signup"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {  }

  save(user:Object):Observable<Object>{
    return this.http.post(ROOT_URL,user)
  
  }
  
}
