import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerviewvehiclesComponent } from './ownerviewvehicles.component';

describe('OwnerviewvehiclesComponent', () => {
  let component: OwnerviewvehiclesComponent;
  let fixture: ComponentFixture<OwnerviewvehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerviewvehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerviewvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
