import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { ForecastData } from 'src/types/location-data';

@Component({
  selector: 'app-forecast-cardboard',
  templateUrl: './forecast-cardboard.component.html',
  styleUrls: ['./forecast-cardboard.component.scss']
})
export class ForecastCardboardComponent implements OnInit {
  forecastData = {} as ForecastData;

  constructor(private forecastService: ForecastService) {

  }

  ngOnInit(): void {
    this.forecastData = this.forecastService.getForecastData();
  }
}
