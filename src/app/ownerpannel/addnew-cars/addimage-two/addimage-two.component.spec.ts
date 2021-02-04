import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddimageTwoComponent } from './addimage-two.component';

describe('AddimageTwoComponent', () => {
  let component: AddimageTwoComponent;
  let fixture: ComponentFixture<AddimageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddimageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddimageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
