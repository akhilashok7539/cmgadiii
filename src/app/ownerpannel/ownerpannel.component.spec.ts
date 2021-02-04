import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerpannelComponent } from './ownerpannel.component';

describe('OwnerpannelComponent', () => {
  let component: OwnerpannelComponent;
  let fixture: ComponentFixture<OwnerpannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerpannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
