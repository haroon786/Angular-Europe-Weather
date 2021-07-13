import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.css']
})
export class HomeWeatherComponent{

  // weatherArr:Weather | undefined;
@Input()  weatherData: any[]=[];
@Input()  forecastArr: any[]=[];
 

  constructor(){}
}
