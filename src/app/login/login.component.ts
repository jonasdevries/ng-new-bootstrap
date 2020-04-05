import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Credentials} from "./credentials";
import {LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials : Credentials = {username: '', password: ''};
  error: string;

  constructor(private loginService:LoginService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {}

  login() {
    this.loginService
      .authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
      });
    return false;
  }
}
