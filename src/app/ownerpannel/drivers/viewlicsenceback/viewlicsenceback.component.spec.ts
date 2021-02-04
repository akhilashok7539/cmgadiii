import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlicsencebackComponent } from './viewlicsenceback.component';

describe('ViewlicsencebackComponent', () => {
  let component: ViewlicsencebackComponent;
  let fixture: ComponentFixture<ViewlicsencebackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewlicsencebackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlicsencebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
