import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { D3GraphComponent }  from './d3graph/d3graph.component';
import { NvD3Module } from 'ng2-nvd3';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { WeatherService } from "./d3graph/weather.service"
 
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';
 
@NgModule({
    imports:      [ BrowserModule, NvD3Module, FormsModule, HttpModule ],
    declarations: [ AppComponent, D3GraphComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ WeatherService ]
})
export class AppModule { }