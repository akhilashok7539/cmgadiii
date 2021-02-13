import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandconditonsComponent } from './termsandconditons.component';

describe('TermsandconditonsComponent', () => {
  let component: TermsandconditonsComponent;
  let fixture: ComponentFixture<TermsandconditonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsandconditonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsandconditonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
