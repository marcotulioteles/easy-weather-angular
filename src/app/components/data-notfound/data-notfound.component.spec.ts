import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNotfoundComponent } from './data-notfound.component';

describe('DataNotfoundComponent', () => {
  let component: DataNotfoundComponent;
  let fixture: ComponentFixture<DataNotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataNotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
