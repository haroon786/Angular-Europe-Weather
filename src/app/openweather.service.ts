import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {
  response: any;


  constructor(private http: HttpClient) {

  }

  getData():Observable<any>
  {
   return forkJoin(
    // as of RxJS 6.5+ we can use a dictionary of sources
    {
      Italy:
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Italy&appid=ff1bc4683fc7325e9c57e586c20cc03e'),
      Turkey:
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Turkey&appid=ff1bc4683fc7325e9c57e586c20cc03e'),
      Austria:
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Austria&appid=ff1bc4683fc7325e9c57e586c20cc03e'),
      Greece:
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Greece&appid=ff1bc4683fc7325e9c57e586c20cc03e'),
      Russia:
      this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Russia&appid=ff1bc4683fc7325e9c57e586c20cc03e')

    }
  )

  }
  // { google: object, microsoft: object, users: array }

  // getData()
  // {
  //   const request1 = this.http.get('https://restcountries.eu/rest/v1/name/india');
  //   const request2 = this.http.get('https://restcountries.eu/rest/v1/name/us');
  //   const request3 = this.http.get('https://restcountries.eu/rest/v1/name/ame');
  //   const request4 = this.http.get('https://restcountries.eu/rest/v1/name/ja');

  //   const requestArray = [];
  //   requestArray.push(request1);
  //   requestArray.push(request2);
  //   requestArray.push(request3);
  //   requestArray.push(request4);

  //   forkJoin(requestArray).subscribe(results => {
  //     console.log(results);
  //     this.response = results;
  //   });

  //   return this.response
  // }

}
