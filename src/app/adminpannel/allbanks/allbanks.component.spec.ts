import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbanksComponent } from './allbanks.component';

describe('AllbanksComponent', () => {
  let component: AllbanksComponent;
  let fixture: ComponentFixture<AllbanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllbanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllbanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
