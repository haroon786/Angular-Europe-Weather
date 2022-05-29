import { Element } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.scss'],
  standalone:true
})
export class HomeWeatherComponent{

  coutry="Itliy";
  // weatherArr:Weather | undefined;
@Input()  weatherData: any[]=[];
@Input()  forecastArr: any[]=[];


  constructor(){}
  trackByMethod(index:number, el:any): number {
   console.log(index,el)
    return el.countryName;
  }
}
