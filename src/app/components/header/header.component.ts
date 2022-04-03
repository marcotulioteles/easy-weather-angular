import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LocationService } from 'src/app/services/location.service';
import { ForecastData, LocationData } from 'src/types/location-data';
import { buildForecastData } from 'src/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() locationInputValue: string = '';
  forecastData = {} as ForecastData;

  constructor(
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
    this.forecastService.getForecastData().subscribe(data => this.forecastData = data);
  }

  submitGetForecastData() {
    if (this.locationInputValue)
      this.forecastService.fetchForecast(this.locationInputValue)
  }
}
