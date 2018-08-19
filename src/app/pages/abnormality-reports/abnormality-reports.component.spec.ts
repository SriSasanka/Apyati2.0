import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbnormalityReportsComponent } from './abnormality-reports.component';

describe('AbnormalityReportsComponent', () => {
  let component: AbnormalityReportsComponent;
  let fixture: ComponentFixture<AbnormalityReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbnormalityReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbnormalityReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
