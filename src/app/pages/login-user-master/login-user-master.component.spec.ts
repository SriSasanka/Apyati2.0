import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserMasterComponent } from './login-user-master.component';

describe('LoginUserMasterComponent', () => {
  let component: LoginUserMasterComponent;
  let fixture: ComponentFixture<LoginUserMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
