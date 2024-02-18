import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from "./services/login.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LoggedUser} from "./model/LoggedUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  OnDestroy {
  title = 'lab-xpert-angular14-for-part2';
  isAdmin = false;
  isTechnician = false;
  isManager = false;

  isAuthenticated = false;
  userSub!: Subscription;

  constructor(
    private authService: LoginService,
  ) {
  }


  ngOnInit() {
    this.authService.autoLogin();

    this.userSub = this.authService.user.subscribe(loggedUser => {
      this.isAuthenticated = !!loggedUser;
      if(!this.isAuthenticated){
        this.initializeState();
      }else if(!!loggedUser)
        this.setRole(loggedUser);
    });
  }

  setRole(loggedUser: LoggedUser | null){
    if(loggedUser?.roles.includes('ADMIN')){
      this.isAdmin = true;
    }
    else if(loggedUser?.roles.includes('TECHNICIAN')){
      this.isTechnician = true;
    }
    else if(loggedUser?.roles.includes('MANAGER')){
      this.isManager = true;
    }
  }

  logout(){
    this.authService.logout();
  }

    initializeState() {
      this.isAdmin = false;
      this.isTechnician = false;
      this.isManager = false;
    }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
