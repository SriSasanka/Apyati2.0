import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDoctorsComponent } from './report-doctors.component';

describe('ReportDoctorsComponent', () => {
  let component: ReportDoctorsComponent;
  let fixture: ComponentFixture<ReportDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
