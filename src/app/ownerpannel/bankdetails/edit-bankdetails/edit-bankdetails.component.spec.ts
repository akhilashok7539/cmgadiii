import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankdetailsComponent } from './edit-bankdetails.component';

describe('EditBankdetailsComponent', () => {
  let component: EditBankdetailsComponent;
  let fixture: ComponentFixture<EditBankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
