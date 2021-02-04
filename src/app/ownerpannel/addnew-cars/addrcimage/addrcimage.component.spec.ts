import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrcimageComponent } from './addrcimage.component';

describe('AddrcimageComponent', () => {
  let component: AddrcimageComponent;
  let fixture: ComponentFixture<AddrcimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrcimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrcimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
