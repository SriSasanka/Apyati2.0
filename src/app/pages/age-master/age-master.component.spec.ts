import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeMasterComponent } from './age-master.component';

describe('AgeMasterComponent', () => {
  let component: AgeMasterComponent;
  let fixture: ComponentFixture<AgeMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
