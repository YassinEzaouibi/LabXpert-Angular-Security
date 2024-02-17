import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }

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
}
