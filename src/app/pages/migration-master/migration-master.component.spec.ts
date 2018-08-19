import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrationMasterComponent } from './migration-master.component';

describe('MigrationMasterComponent', () => {
  let component: MigrationMasterComponent;
  let fixture: ComponentFixture<MigrationMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MigrationMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MigrationMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
