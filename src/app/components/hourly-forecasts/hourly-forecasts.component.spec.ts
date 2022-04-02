import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastsComponent } from './hourly-forecasts.component';

describe('HourlyForecastsComponent', () => {
  let component: HourlyForecastsComponent;
  let fixture: ComponentFixture<HourlyForecastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HourlyForecastsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
