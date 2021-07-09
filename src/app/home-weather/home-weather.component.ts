import { Component, OnInit } from '@angular/core';
import { OpenweatherService } from '../openweather.service';

@Component({
  selector: 'app-home-weather',
  templateUrl: './home-weather.component.html',
  styleUrls: ['./home-weather.component.css']
})
export class HomeWeatherComponent implements OnInit {

  // weatherArr:Weather | undefined;

  countryName:any;
  temp:any
  sunrisetime:any
  sunsettime:any
  weather:any=[];
  isDay:boolean=true;
  weatherArr:any[] = [];
  arr:any=[]
  constructor(private openweatherservice:OpenweatherService){}


  ngOnInit(): void
  {
   this.openweatherservice.getData().subscribe((data:any)=>
    {
              this.createWeatherArr(data)


         // this.weatherDeatails(data)

    })
}
createWeatherArr(data:any)
{

  let currentDate = new Date();
  Object.keys(data).forEach((key)=>
  {
    this.arr.push({
               countryName :data[key].name,
               temp:(data[key].main.temp- 273.15).toFixed(0),      //convert temperature from kelvin to celsius
               sunrise:new Date(data[key].sys.sunrise* 1000).toLocaleTimeString(), //unix uct format  converting to milisecond and the passing
               sunset:new Date(data[key].sys.sunset*1000).toLocaleTimeString(),
               isDay:(currentDate.getTime() < new Date(data[key].sys.sunset*1000).getTime())
            })
  })
  this.weatherArr=this.arr
  console.log(this.weatherArr)
}
  // weatherDeatails(data:any)
  // {
  //      this.countryName=data.Austria.name
  //      this.temp=(data.Austria.main.temp - 273.15).toFixed(0);
  //      let sunrise = new Date(data.Austria.sys.sunrise * 1000);      //unix uct format  converting to milisecond and the passing
  //      this.sunrisetime= sunrise.toLocaleTimeString();           //converting to local time

  //      let sunset = new Date(data.Austria.sys.sunset * 1000);
  //      this.sunsettime= sunset.toLocaleTimeString();

  //      let currentDate = new Date();
  //      this.isDay = (currentDate.getTime() < sunset.getTime());

  // }

}
