import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {map, shareReplay} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UniversityCollegeService {

  header:any;

  constructor(private http: HttpClient) {}

  getUniversityes(page:number,countryCode:string,limit:number):Observable<any>
  {
    //  this.header=new Headers()
      this.header = new HttpHeaders()
           .set('X-RapidAPI-Key', '74861eaf0amsh9c5646f72780e0dp1f1380jsn8c6423b86538');
         //  {page: '20', countryCode: 'US', limit: '10'},
           const params = new HttpParams()
           .set('page', page)                      //current page
           .set('includeUniversityDetails', true)
           .set('countryCode',countryCode)
           .set('limit', limit);                 //max limit is 50

         //  .set('id', '1015');


           const option={params:params,headers:this.header}

    return this.http.get<any>('https://universities-and-colleges.p.rapidapi.com/universities',option)
  }
}
