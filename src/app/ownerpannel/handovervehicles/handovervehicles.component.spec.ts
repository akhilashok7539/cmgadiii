import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandovervehiclesComponent } from './handovervehicles.component';

describe('HandovervehiclesComponent', () => {
  let component: HandovervehiclesComponent;
  let fixture: ComponentFixture<HandovervehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandovervehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandovervehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
