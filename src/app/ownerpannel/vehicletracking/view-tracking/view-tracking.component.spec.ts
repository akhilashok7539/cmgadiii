import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTrackingComponent } from './view-tracking.component';

describe('ViewTrackingComponent', () => {
  let component: ViewTrackingComponent;
  let fixture: ComponentFixture<ViewTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
