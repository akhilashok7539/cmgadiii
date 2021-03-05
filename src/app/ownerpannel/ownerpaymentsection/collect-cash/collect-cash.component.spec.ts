import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectCashComponent } from './collect-cash.component';

describe('CollectCashComponent', () => {
  let component: CollectCashComponent;
  let fixture: ComponentFixture<CollectCashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectCashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
