import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTemplateInternalComponent } from './report-template-internal.component';

describe('ReportTemplateInternalComponent', () => {
  let component: ReportTemplateInternalComponent;
  let fixture: ComponentFixture<ReportTemplateInternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTemplateInternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTemplateInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
