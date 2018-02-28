import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

    constructor(private http: Http) { }

    private key: string = "2a49044e196fae3d7c7b2ab373f8f0b1";

    getForecast(city: string) {
        const URLString = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&APPID=2a49044e196fae3d7c7b2ab373f8f0b1";
        return this.http.get(URLString);
    }
}