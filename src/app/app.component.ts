import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Greeting} from "./greeting";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-new-bootstrap';
  greeting : Greeting;

  constructor(private http: HttpClient) {

    console.log({authorization : 'Basic ' + btoa('usr:pwd')});

    const headers = new HttpHeaders(
      {authorization : 'Basic ' + btoa('usr:pwd')}
    );

    http.get<Greeting>('/api/greeting',
      {headers: headers}
      )
      .subscribe(data => this.greeting = data);
  }

}
