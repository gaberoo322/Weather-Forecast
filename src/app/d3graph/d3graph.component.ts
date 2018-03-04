import { Component, OnChanges, Input } from '@angular/core';
import { Weather } from '../shared/weather.model';
import { scale } from 'd3';

@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html'
})

export class D3GraphComponent implements OnChanges {
  @Input() forecast: any;
  options;
  data;
  chartType;

  ngOnChanges() {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function (d) { return d.x },
        y: function (d) { return d.y },
        useInteractiveGuideline: true,
    
        xAxis: {
          axisLabel: '3 hour intervals',
        },
        yAxis: {
          axisLabel: 'Temperature F˚',
          tickFormat: function (d) {
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };
    this.data = this.temperatureData();
  }
  _toFahrenheit(kelvin: number) {
    return (9 / 5 * (kelvin - 273.15) + 32);
  }
  _timeFormat(timeStamp: string) {
    let time = new Date(timeStamp);
    return time;
  }

  temperatureData() {
    var temp = [], colors = []
    this.forecast.list.forEach((interval, index) => {
      temp.push({ x: this._timeFormat(interval.dt_txt), y: this._toFahrenheit(interval.main.temp) });
    });
    return [
      {
        values: temp,
        key: 'Temperature',
        color: "#64A338"
      }
    ];
  }
}
