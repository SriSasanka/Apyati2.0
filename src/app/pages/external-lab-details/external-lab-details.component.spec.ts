import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalLabDetailsComponent } from './external-lab-details.component';

describe('ExternalLabDetailsComponent', () => {
  let component: ExternalLabDetailsComponent;
  let fixture: ComponentFixture<ExternalLabDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalLabDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalLabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
