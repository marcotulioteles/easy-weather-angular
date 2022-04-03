import { Component, OnInit, Input } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ForecastData } from 'src/types/location-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() locationInputValue: string = '';
  forecastData = {} as ForecastData;
  isLoading = false;

  constructor(
    private forecastService: ForecastService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.getLoadingStatus();
    this.getForecastData();
  }

  submitGetForecastData() {
    if (this.locationInputValue)
      this.forecastService.fetchForecast(this.locationInputValue)
  }

  getForecastData() {
    this.forecastService.getForecastData().subscribe(data => this.forecastData = data);
  }

  getLoadingStatus() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if(status === 'start') this.isLoading = true;
      else this.isLoading = false;
    })
  }

}
