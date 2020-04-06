import { Component, OnInit } from '@angular/core';
import {Greeting} from './model/Greeting';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title =  'Demo';
  greeting: Greeting;

  constructor(private mainService: MainService){
    this.mainService.greeting()
      .subscribe(resp => this.greeting = resp);
  }

}
