import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent implements OnInit {
  showEmptyState = true;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.manageHideEmptyState();
  }

  manageHideEmptyState() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      if (status === 'start') this.showEmptyState = false;
      else this.showEmptyState = true;
      this.cdRef.detectChanges();
    });
  }
}
