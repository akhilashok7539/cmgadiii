import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddriverLicscenceComponent } from './adddriver-licscence.component';

describe('AdddriverLicscenceComponent', () => {
  let component: AdddriverLicscenceComponent;
  let fixture: ComponentFixture<AdddriverLicscenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriverLicscenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddriverLicscenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
