import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {Sexe} from "../../../model/sexe";
import {Role} from "../../../model/role";

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {

  users: User[];

  // @ts-ignore
  user: User = new User();
  genderOptions = Object.values(Sexe);
  roles = Object.values(Role);


  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
      this.users.sort((a, b) => a.id - b.id);
    });
  }

  updateUser(id: number) {
    this.router.navigate(['/users/update', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      this.getUsersList();
    })
  }

  onSubmit() {
    this.saveUser();
  }

  private saveUser() {
    if (this.user.role == null || this.user.sexe == null) {
      console.error('Role and Sexe must not be null');
      return;
    }

    this.userService.saveUser(this.user).subscribe({
      next: () => {
        this.goToUserList();
      },
      error: (error) => {
        console.error('An error occurred while saving the User:', error);
      }
    });  }

  goToUserList() {
    this.router.navigate(['/users']);
  }
}
