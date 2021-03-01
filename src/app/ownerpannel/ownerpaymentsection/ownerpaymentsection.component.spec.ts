import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerpaymentsectionComponent } from './ownerpaymentsection.component';

describe('OwnerpaymentsectionComponent', () => {
  let component: OwnerpaymentsectionComponent;
  let fixture: ComponentFixture<OwnerpaymentsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerpaymentsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerpaymentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
