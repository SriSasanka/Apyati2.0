import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinteditReportsComponent } from './printedit-reports.component';

describe('PrinteditReportsComponent', () => {
  let component: PrinteditReportsComponent;
  let fixture: ComponentFixture<PrinteditReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinteditReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinteditReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
