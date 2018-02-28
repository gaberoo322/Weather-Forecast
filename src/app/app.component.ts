import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { WeatherService } from './d3graph/weather.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('f') weatherForm: NgForm;
  forecast;
  city;

  constructor(private weatherService: WeatherService) { };
  

  onGetForecast(form: NgForm) {
    this.weatherService.getForecast(form.controls.city.value)
    .subscribe(
      (response) => {
        this.forecast = response.json();
        console.log(this.forecast);
      },
      (error) => {
        console.log("Error")
      }
    )
  };
}
