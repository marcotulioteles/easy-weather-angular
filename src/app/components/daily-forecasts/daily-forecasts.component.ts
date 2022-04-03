import { Component, Input, OnInit } from '@angular/core';
import { ForecastData, LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-daily-forecasts',
  templateUrl: './daily-forecasts.component.html',
  styleUrls: ['./daily-forecasts.component.scss']
})
export class DailyForecastsComponent implements OnInit {
  @Input() forecastData = {} as ForecastData;
  @Input() locationData = {} as LocationData;

  constructor() {
  }

  ngOnInit(): void {}
}
