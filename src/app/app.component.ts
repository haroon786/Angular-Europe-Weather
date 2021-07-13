import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from './openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-Weather-App';
  constructor(){}


  ngOnInit(): void
  {
    
  }



}
