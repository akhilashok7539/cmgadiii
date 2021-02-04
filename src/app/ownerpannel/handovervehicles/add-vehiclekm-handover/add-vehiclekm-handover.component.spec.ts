import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehiclekmHandoverComponent } from './add-vehiclekm-handover.component';

describe('AddVehiclekmHandoverComponent', () => {
  let component: AddVehiclekmHandoverComponent;
  let fixture: ComponentFixture<AddVehiclekmHandoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVehiclekmHandoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehiclekmHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
