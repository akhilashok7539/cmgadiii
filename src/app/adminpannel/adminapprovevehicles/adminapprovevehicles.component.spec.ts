import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminapprovevehiclesComponent } from './adminapprovevehicles.component';

describe('AdminapprovevehiclesComponent', () => {
  let component: AdminapprovevehiclesComponent;
  let fixture: ComponentFixture<AdminapprovevehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminapprovevehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminapprovevehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
