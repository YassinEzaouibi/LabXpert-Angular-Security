import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {Sexe} from "../../../model/sexe";
import {Role} from "../../../model/role";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users: User[];

  // @ts-ignore
  user: User = new User();
  genderOptions = Object.values(Sexe);
  roles = Object.values(Role);


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  onSubmit() {
    this.updateUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  private updateUser() {
    if (this.user.role == null || this.user.sexe == null) {
      console.error('Role and Sexe must not be null');
      return;
    }

    this.userService.updateUser(this.user.id, this.user).subscribe({
      next: () => {
        this.goToUserList();
      },
      error: (error) => {
        console.error('An error occurred while updating the User:', error);
      }
    });
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }
}
