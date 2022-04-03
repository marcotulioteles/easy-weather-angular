import { Component, Input, OnInit } from '@angular/core';
import { ForecastData, LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-hourly-forecasts',
  templateUrl: './hourly-forecasts.component.html',
  styleUrls: ['./hourly-forecasts.component.scss']
})
export class HourlyForecastsComponent implements OnInit {
  @Input() forecastData = {} as ForecastData;
  @Input() locationData = {} as LocationData;

  constructor() {}

  ngOnInit(): void {}
}
