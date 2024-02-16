import { Component } from '@angular/core';
import {LoginService} from "./services/login.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-xpert-angular14-for-part2';
  isClicked = false;

  isAuthenticated = false;
  userSub!: Subscription;

  constructor(private authService: LoginService) {
  }

  changeColor() {
    this.isClicked = !this.isClicked;
  }
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(loggedUser => {
      this.isAuthenticated = !!loggedUser;
    });
  }
  logout(){

  }
}
