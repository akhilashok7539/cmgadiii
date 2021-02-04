import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlicenceBackComponent } from './addlicence-back.component';

describe('AddlicenceBackComponent', () => {
  let component: AddlicenceBackComponent;
  let fixture: ComponentFixture<AddlicenceBackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlicenceBackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlicenceBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
