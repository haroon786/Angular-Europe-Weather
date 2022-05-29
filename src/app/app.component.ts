import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OpenweatherService } from './openweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports:[RouterModule]
})
export class AppComponent implements OnInit {
  title = 'Angular-Weather-App';

  constructor(){}

  ngOnInit(): void
  {

  }



}
