import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelationpolicyComponent } from './cancelationpolicy.component';

describe('CancelationpolicyComponent', () => {
  let component: CancelationpolicyComponent;
  let fixture: ComponentFixture<CancelationpolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelationpolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelationpolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
