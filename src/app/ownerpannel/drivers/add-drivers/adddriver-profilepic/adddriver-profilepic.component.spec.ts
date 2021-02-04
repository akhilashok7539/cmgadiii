import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddriverProfilepicComponent } from './adddriver-profilepic.component';

describe('AdddriverProfilepicComponent', () => {
  let component: AdddriverProfilepicComponent;
  let fixture: ComponentFixture<AdddriverProfilepicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriverProfilepicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddriverProfilepicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
