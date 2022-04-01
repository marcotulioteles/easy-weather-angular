import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCardboardComponent } from './forecast-cardboard.component';

describe('ForecastCardboardComponent', () => {
  let component: ForecastCardboardComponent;
  let fixture: ComponentFixture<ForecastCardboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastCardboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastCardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
