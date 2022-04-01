import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LocationService } from 'src/app/services/location.service';
import { LocationData } from 'src/types/location-data';
import { formatForecastData } from 'src/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() locationInputValue: string = '';

  constructor(
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.getForecastData();
  }

  getForecastData() {
    if (this.locationInputValue)
      this.forecastService.fetchForecast(this.locationInputValue)
  }
}
