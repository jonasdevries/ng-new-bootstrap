import {HttpClient} from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import {Greeting} from "./greeting";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ng-new-bootstrap';
  greeting : Greeting = {id: '', content: ''};

  constructor(private loginService : LoginService,
              private http : HttpClient) {}

  authenticated() {
    return this.loginService.authenticated;
  }

  ngOnInit(): void {
    this.http.get<Greeting>('/api/greeting')
      .subscribe(data => this.greeting = data);
  }

}
