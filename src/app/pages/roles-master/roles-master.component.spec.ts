import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesMasterComponent } from './roles-master.component';

describe('RolesMasterComponent', () => {
  let component: RolesMasterComponent;
  let fixture: ComponentFixture<RolesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
