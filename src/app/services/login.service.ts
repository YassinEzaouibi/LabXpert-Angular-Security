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
  tokenExpirationTimer: any;

  constructor(private http: HttpClient, private route: Router) { }

  public login(user: LoginRequest) : Observable<LoginResponse> {
     const formData = new FormData();
     formData.append('username', user.username);
     formData.append('password', user.password);
     return this.http.post<LoginResponse>('http://localhost:8888/login',formData);
  }

  saveToken(token: LoginResponse){
    const decodedAccessToken = this.jwtHelperService.decodeToken(token.AccessToken);
    console.log('Token expiration time: ', decodedAccessToken.exp);
    const loggedUser = new LoggedUser(decodedAccessToken.sub, decodedAccessToken.roles, token.AccessToken, this.getExpirationDate(decodedAccessToken.exp));
    localStorage.setItem('userData', JSON.stringify(loggedUser));
    this.user.next(loggedUser);
    const experationDuration = this.getExpirationDate(decodedAccessToken.exp).valueOf() - new Date().valueOf();
    if (experationDuration > 0) {
      this.autoLogout(experationDuration);
    }
    this.redirectToLogin(decodedAccessToken, token.AccessToken);
  }

  redirectToLogin(decodedToken:any, accessToken: string) {
    if (decodedToken.roles.includes('ADMIN')) {
      this.route.navigateByUrl("dashboard");
    }
    else if(decodedToken.roles.includes('MANAGER')) {
      this.route.navigateByUrl("/echontillons");
    }
    else if(decodedToken.roles.includes('TECHNICIAN')) {
      this.route.navigateByUrl("/materials");
    }

  }

  autoLogin(){
    const userData:{
      username:string,
      roles:string[],
      _token:string,
      _expiration:Date
    } = JSON.parse(localStorage.getItem('userData'));
    console.log('Auto login called with user data: ', userData);
    if(!userData)return;
    const  loadedUser= new LoggedUser(userData.username,userData.roles,userData._token,new Date(userData._expiration));
    if(loadedUser.token){
      console.log('Token is valid, auto login executed');
      this.user.next(loadedUser);
      const experationDuration = loadedUser._expiration.valueOf()- new Date().valueOf();
      if (experationDuration > 0) {
        this.autoLogout(experationDuration);
      }
    }else {
      console.log('Token is not valid');
    }
  }

  getExpirationDate(exp: number){
    const date = new Date(0);
    date.setUTCSeconds(exp);
    return date;
  }

  logout() {
    localStorage.clear();
    this.user.next(null);
    this.route.navigateByUrl("/");
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

   autoLogout(experationDuration: number) {
     console.log('Auto logout called with duration: ', experationDuration);
     this.tokenExpirationTimer = setTimeout(() => {
      console.log('Auto logout executed');
      this.logout();
    }, experationDuration);
  }
}
