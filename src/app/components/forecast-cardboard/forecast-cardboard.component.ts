import { Component, Input, OnInit } from '@angular/core';
import { ForecastData, LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-forecast-cardboard',
  templateUrl: './forecast-cardboard.component.html',
  styleUrls: ['./forecast-cardboard.component.scss']
})
export class ForecastCardboardComponent implements OnInit {
  @Input() forecastData = {} as ForecastData;
  @Input() locationData = {} as LocationData;

  constructor() {}

  ngOnInit(): void {
  }
}
