// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeWeatherComponent } from './home-weather/home-weather.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { WeatherLayoutComponent } from './weather-layout/weather-layout.component';
// import { MaterialModule } from './material-module';

// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { LanguageControlComponent } from './language-control/language-control.component';
// import { MatTableModule } from '@angular/material/table';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatSortModule } from '@angular/material/sort';
// import {FormsModule} from '@angular/forms';
// import { OpenweatherService } from './openweather.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeWeatherComponent,
//     WeatherLayoutComponent,
//     LanguageControlComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
//     MaterialModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: httpTranslateLoader,
//         deps: [HttpClient]
//       }
//     }),
//     MatTableModule,
//     MatPaginatorModule,
//     MatSortModule
//   ],
//   providers: [OpenweatherService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// export function httpTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
