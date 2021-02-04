import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewliscenceComponent } from './viewliscence.component';

describe('ViewliscenceComponent', () => {
  let component: ViewliscenceComponent;
  let fixture: ComponentFixture<ViewliscenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewliscenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewliscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
