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
    console.log('DATA_FROM_FORECAST-CARDBOARD: ', this.forecastService.getForecastData())
  }

  ngOnInit(): void {
    this.forecastService.getForecastData().subscribe(forecast => this.forecastData = forecast);
  }
}
