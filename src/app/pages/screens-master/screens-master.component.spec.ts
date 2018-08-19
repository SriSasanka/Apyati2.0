import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensMasterComponent } from './screens-master.component';

describe('ScreensMasterComponent', () => {
  let component: ScreensMasterComponent;
  let fixture: ComponentFixture<ScreensMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
