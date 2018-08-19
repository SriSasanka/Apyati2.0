import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCollectionsComponent } from './sample-collections.component';

describe('SampleCollectionsComponent', () => {
  let component: SampleCollectionsComponent;
  let fixture: ComponentFixture<SampleCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
