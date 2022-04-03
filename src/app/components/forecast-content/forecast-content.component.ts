import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';
import { LocationService } from 'src/app/services/location.service';
import { ForecastData, LocationData } from 'src/types/location-data';

@Component({
  selector: 'app-forecast-content',
  templateUrl: './forecast-content.component.html',
  styleUrls: ['./forecast-content.component.scss']
})
export class ForecastContentComponent implements OnInit {
  forecastData = {} as ForecastData;
  locationData = {} as LocationData;
  showContainer = true;

  constructor(
    private forecastService: ForecastService,
    private locationService: LocationService,
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getForecastData();
    this.getLocationData();
    this.manageShowContainer();
  }

  getForecastData() {
    this.forecastService.getForecastData()
    .subscribe(forecast => this.forecastData = forecast);
  }

  getLocationData() {
    this.locationService.getLocationData()
    .subscribe(location => this.locationData = location);
  }

  manageShowContainer() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if (status === 'start') this.showContainer = false;
      else this.showContainer = true;

      this.cdRef.detectChanges();
    })
  }
}
