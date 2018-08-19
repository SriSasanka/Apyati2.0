import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSampleTypeComponent } from './test-sample-type.component';

describe('TestSampleTypeComponent', () => {
  let component: TestSampleTypeComponent;
  let fixture: ComponentFixture<TestSampleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSampleTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSampleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
