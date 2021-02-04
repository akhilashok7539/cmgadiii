import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddriverLicscencebackComponent } from './adddriver-licscenceback.component';

describe('AdddriverLicscencebackComponent', () => {
  let component: AdddriverLicscencebackComponent;
  let fixture: ComponentFixture<AdddriverLicscencebackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddriverLicscencebackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddriverLicscencebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
