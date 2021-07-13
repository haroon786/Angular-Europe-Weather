import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWeatherComponent } from './home-weather/home-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherLayoutComponent } from './weather-layout/weather-layout.component';
import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    HomeWeatherComponent,
    WeatherLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
