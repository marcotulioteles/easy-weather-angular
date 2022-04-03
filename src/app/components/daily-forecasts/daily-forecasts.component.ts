import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LocationService } from 'src/app/services/location.service';
import { ForecastData, LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-daily-forecasts',
  templateUrl: './daily-forecasts.component.html',
  styleUrls: ['./daily-forecasts.component.scss']
})
export class DailyForecastsComponent implements OnInit {
  forecastData = {} as ForecastData;
  locationData = {} as LocationData;
  showContainer = true;

  constructor(
    private forecastService: ForecastService,
    private locationService: LocationService,
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.forecastService.getForecastData().subscribe(data => this.forecastData = data);
    this.locationService.getLocationData().subscribe(data => this.locationData = data);
    this.manageShowContainer();
  }

  manageShowContainer() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if(status === 'start') this.showContainer = false;
      else this.showContainer = true;

      this.cdRef.detectChanges();
    })
  }
}
