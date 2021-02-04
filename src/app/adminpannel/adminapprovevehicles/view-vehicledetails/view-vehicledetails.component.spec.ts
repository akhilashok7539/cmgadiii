import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVehicledetailsComponent } from './view-vehicledetails.component';

describe('ViewVehicledetailsComponent', () => {
  let component: ViewVehicledetailsComponent;
  let fixture: ComponentFixture<ViewVehicledetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVehicledetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVehicledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
