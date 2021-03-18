import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CannceledBookingsComponent } from './cannceled-bookings.component';

describe('CannceledBookingsComponent', () => {
  let component: CannceledBookingsComponent;
  let fixture: ComponentFixture<CannceledBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannceledBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CannceledBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
