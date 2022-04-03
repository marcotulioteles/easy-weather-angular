import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';
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
  locationIsEmpty = false;

  constructor(
    private forecastService: ForecastService,
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getForecastData();
    this.getLocationData();
    this.manageShowContainer();
    this.getLocationIsEmptyState();
  }

  getForecastData() {
    this.forecastService.getForecastData()
    .subscribe({
      next: forecast => {
        this.forecastData = forecast;
      },
      error: e => {
        console.error(e);
        this.loadingService.resetLoading();
      },
      complete: () => this.loadingService.requestEnded()
    });
  }

  getLocationData() {
    this.forecastService.getLocationData()
    .subscribe({
      next: location => {
        this.loadingService.requestStarted();
        this.locationData = location
      },
      error: e => {
        console.error(e);
        this.loadingService.resetLoading();
      },
      complete: () => this.loadingService.requestEnded()
    });
  }

  getLocationIsEmptyState() {
    this.forecastService.getLocationIsEmpty().subscribe(state => this.locationIsEmpty = state);
  }

  manageShowContainer() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if (status === 'start') this.showContainer = false;
      else this.showContainer = true;

      this.cdRef.detectChanges();
    })
  }
}
