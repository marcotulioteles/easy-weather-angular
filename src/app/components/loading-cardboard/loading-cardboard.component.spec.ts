import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCardboardComponent } from './loading-cardboard.component';

describe('LoadingCardboardComponent', () => {
  let component: LoadingCardboardComponent;
  let fixture: ComponentFixture<LoadingCardboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingCardboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCardboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
