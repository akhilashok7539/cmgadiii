import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpageformarketingComponent } from './registerpageformarketing.component';

describe('RegisterpageformarketingComponent', () => {
  let component: RegisterpageformarketingComponent;
  let fixture: ComponentFixture<RegisterpageformarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterpageformarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterpageformarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
