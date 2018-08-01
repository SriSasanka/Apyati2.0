import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledemoComponent } from './scheduledemo.component';

describe('ScheduledemoComponent', () => {
  let component: ScheduledemoComponent;
  let fixture: ComponentFixture<ScheduledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
