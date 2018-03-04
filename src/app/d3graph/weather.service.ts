import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Form, NgForm } from '@angular/forms';

@Injectable()
export class WeatherService {

    constructor(private http: Http) { }

    private key: string = "2a49044e196fae3d7c7b2ab373f8f0b1";

    getForecast(city: string, zip: number, form: NgForm) {
        if (zip) { //seems more specific than city, so it takes precedence.
            const URLString = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "&APPID=2a49044e196fae3d7c7b2ab373f8f0b1";
            form.controls.city.reset();  //avoid some confusion if the cities dont match up.
            return this.http.get(URLString);
        } else if (city) {
            const URLString = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=2a49044e196fae3d7c7b2ab373f8f0b1";
            return this.http.get(URLString);
        } 
    }
}