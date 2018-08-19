import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMasterComponent } from './setup-master.component';

describe('SetupMasterComponent', () => {
  let component: SetupMasterComponent;
  let fixture: ComponentFixture<SetupMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
