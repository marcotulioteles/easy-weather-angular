import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/services/forecast.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
  showEmptyState = true;
  locationIsEmpty = false;

  constructor(
    private loadingService: LoadingService,
    private forecastService: ForecastService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.manageHideEmptyState();
    this.getLocationIsEmpty();
  }

  manageHideEmptyState() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if (status === 'start') this.showEmptyState = false;
      else this.showEmptyState = true;
      this.cdRef.detectChanges();
    });
  }

  getLocationIsEmpty() {
    this.forecastService.getLocationIsEmpty().subscribe(state => this.locationIsEmpty = state);
  }
}
