import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LocationService } from 'src/app/services/location.service';
import { LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() locationInputValue: string = '';
  forecastData: any = {};

  constructor(
    private locationService: LocationService,
    private forecastService: ForecastService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.getForecastData();
  }

  getForecastData() {
    if (this.locationInputValue)
      this.locationService.getLocationCoordinates(this.locationInputValue)
      .subscribe((data:LocationData[]) => this.forecastService.getForecast(data[0].lat, data[0].lon)
        .subscribe(data => this.forecastData = data));
  }
}
