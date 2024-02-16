import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoginRequest, LoginResponse } from "../model/login";
import {BehaviorSubject, Observable} from "rxjs";
import { LoggedUser } from "../model/LoggedUser";
import { JwtHelperService } from "@auth0/angular-jwt";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  jwtHelperService = new JwtHelperService();
  user = new BehaviorSubject<LoggedUser | null>(null);

  constructor(private http: HttpClient, private route: Router) { }

  public login(user: LoginRequest) : Observable<LoginResponse> {
     const formData = new FormData();
     formData.append('username', user.username);
     formData.append('password', user.password);
     return this.http.post<LoginResponse>('http://localhost:8888/login',formData);
  }

  saveToken(token: LoginResponse){
    const decodedAccessToken = this.jwtHelperService.decodeToken(token.AccessToken);
    const loggedUser = new LoggedUser(decodedAccessToken.sub, decodedAccessToken.roles, token.AccessToken, this.getExpirationDate(decodedAccessToken.exp));
    this.user.next(loggedUser);
    this.redirectToLogin(decodedAccessToken, token.AccessToken);
  }

  redirectToLogin(decodedToken:any, accessToken: string){
    if(decodedToken.roles.includes('ADMIN')) this.route.navigateByUrl("dashboard");
    else if(decodedToken.roles.includes('MANAGER')) this.route.navigateByUrl("/echontillons");
    else if(decodedToken.roles.includes('TECHNICIAN')) this.route.navigateByUrl("/materials");



  }

  getExpirationDate(exp: number){
    const date = new Date();
    date.setUTCSeconds(exp);
    return date;
  }

}
