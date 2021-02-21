import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsadnfeedbacksComponent } from './chatsadnfeedbacks.component';

describe('ChatsadnfeedbacksComponent', () => {
  let component: ChatsadnfeedbacksComponent;
  let fixture: ComponentFixture<ChatsadnfeedbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsadnfeedbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsadnfeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
