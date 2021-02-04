import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlicenceFrontComponent } from './addlicence-front.component';

describe('AddlicenceFrontComponent', () => {
  let component: AddlicenceFrontComponent;
  let fixture: ComponentFixture<AddlicenceFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlicenceFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlicenceFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
