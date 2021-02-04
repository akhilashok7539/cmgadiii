import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PulicregistrationmarketingComponent } from './pulicregistrationmarketing.component';

describe('PulicregistrationmarketingComponent', () => {
  let component: PulicregistrationmarketingComponent;
  let fixture: ComponentFixture<PulicregistrationmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulicregistrationmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PulicregistrationmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
