import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading-cardboard',
  templateUrl: './loading-cardboard.component.html',
  styleUrls: ['./loading-cardboard.component.scss']
})
export class LoadingCardboardComponent implements OnInit {
  showLoading = false;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.loadingService.getLoadingObserver().subscribe(status => {
      this.showLoading = status === 'start';
      this.cdRef.detectChanges();
    });
  }

}
