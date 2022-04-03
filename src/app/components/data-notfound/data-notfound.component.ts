import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-data-notfound',
  templateUrl: './data-notfound.component.html',
  styleUrls: ['./data-notfound.component.scss']
})
export class DataNotfoundComponent implements OnInit {
  showCardboard = false;
  isLoading = false;

  constructor(private forecastService: ForecastService, private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getLocationsIsEmptyState();
    this.getLoadingStatus();
  }

  getLocationsIsEmptyState() {
    this.forecastService.getLocationIsEmpty().subscribe(state => this.showCardboard = state);
  }

  getLoadingStatus() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if(status === 'start') this.isLoading = true;
      else this.isLoading = false;
    })
  }
}
