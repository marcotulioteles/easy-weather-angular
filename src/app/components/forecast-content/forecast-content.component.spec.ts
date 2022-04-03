import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastContentComponent } from './forecast-content.component';

describe('ForecastContentComponent', () => {
  let component: ForecastContentComponent;
  let fixture: ComponentFixture<ForecastContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
