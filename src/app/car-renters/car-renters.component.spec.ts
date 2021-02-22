import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentersComponent } from './car-renters.component';

describe('CarRentersComponent', () => {
  let component: CarRentersComponent;
  let fixture: ComponentFixture<CarRentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
