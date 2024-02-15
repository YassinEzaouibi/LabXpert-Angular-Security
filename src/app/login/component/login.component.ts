import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  submitted: boolean = false;
  errorMassage!: string;
  constructor(private formGroup: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formGroup.group({
      username: ["",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ["", Validators.required]
    })
  }
  onLogin(){
    this.submitted = true;
    if(this.loginFormGroup.invalid) return;

    this.loginService.login(this.loginFormGroup.value).subscribe({
      next: (loginResponse) => {
          this.loginService.saveToken(loginResponse);
      },
      error: errory => {
        console.log(errory)
        this.errorMassage = "error login"
      }
    });
  }

}
