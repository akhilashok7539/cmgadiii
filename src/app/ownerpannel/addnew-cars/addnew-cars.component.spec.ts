import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewCarsComponent } from './addnew-cars.component';

describe('AddnewCarsComponent', () => {
  let component: AddnewCarsComponent;
  let fixture: ComponentFixture<AddnewCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
