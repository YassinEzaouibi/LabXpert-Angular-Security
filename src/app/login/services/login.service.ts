import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest, LoginResponse} from "../../Entity/login";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user: LoginRequest) : Observable<LoginResponse> {
     const formData = new FormData();
      formData.append('username', user.username);
      formData.append('password', user.password);
      return this.http.post<LoginResponse>('http://localhost:8888/login',formData);
  }

  saveToken(token: LoginResponse){

  }
}
