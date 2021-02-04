import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimageOneComponent } from './addimage-one.component';

describe('AddimageOneComponent', () => {
  let component: AddimageOneComponent;
  let fixture: ComponentFixture<AddimageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
