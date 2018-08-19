import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTimingsComponent } from './test-timings.component';

describe('TestTimingsComponent', () => {
  let component: TestTimingsComponent;
  let fixture: ComponentFixture<TestTimingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTimingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTimingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
