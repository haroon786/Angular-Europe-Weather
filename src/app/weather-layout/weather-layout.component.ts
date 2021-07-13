import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.css'],
})
export class WeatherLayoutComponent implements OnInit {
  countryName: any;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  arr: any = [];
  countryWeatherArr: any = [];
  forecast: any[] = [];
  forecastarr: any[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private openweatherservice: OpenweatherService
  ) {}
  ngOnInit(): void {
    this.countryName =
      this.countryName == undefined ? 'Italy' : this.countryName;

    this.getWeatherDetails();
    
  }

  change(event: any) {
    this.countryName = event;

    // this.Name=event
    console.log(event);
    this.foreCast();
  }

  getWeatherDetails() {
    this.openweatherservice.getData().subscribe((data: any) => {
      this.createWeatherArr(data);
      this.foreCast();
      // this.weatherDeatails(data)
    });
  }
  createWeatherArr(data: any) {
    let currentDate = new Date();
    Object.keys(data).forEach((key) => {
      this.arr.push({
        countryName: data[key].name,
        temp: (data[key].main.temp - 273.15).toFixed(0), //convert temperature from kelvin to celsius
        sunrise: new Date(data[key].sys.sunrise * 1000).toLocaleTimeString(), //unix uct format  converting to milisecond and the passing
        sunset: new Date(data[key].sys.sunset * 1000).toLocaleTimeString(),
        isDay:
          currentDate.getTime() <
          new Date(data[key].sys.sunset * 1000).getTime(),
      });
    });
  }

  foreCast() {
    this.openweatherservice
      .foreCastData(this.countryName)
      .subscribe((data: any) => {
        this.forecast = data;

        //making new array
         if(this.forecastarr.length>0){ this.forecastarr=[]}
        Object.keys(this.forecast).forEach((key) => {
          this.forecastarr.push({
            date: data[key].dt,
            temp: (data[key].main.temp - 273.15).toFixed(0), //convert temperature from kelvin to celsius
            seaLevel: data[key].main.sea_level + ' ' + 'hPa',
          });
        });

        // console.log()
        this.countryWeatherArr = this.arr.filter(
          (e: any) => e.countryName == this.countryName
        );
      });
  }
}
