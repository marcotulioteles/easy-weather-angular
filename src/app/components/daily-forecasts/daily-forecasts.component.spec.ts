import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyForecastsComponent } from './daily-forecasts.component';

describe('DailyForecastsComponent', () => {
  let component: DailyForecastsComponent;
  let fixture: ComponentFixture<DailyForecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyForecastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
