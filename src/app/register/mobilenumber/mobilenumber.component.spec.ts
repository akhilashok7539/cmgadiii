import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenumberComponent } from './mobilenumber.component';

describe('MobilenumberComponent', () => {
  let component: MobilenumberComponent;
  let fixture: ComponentFixture<MobilenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
