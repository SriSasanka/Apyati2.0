import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFormatterComponent } from './header-formatter.component';

describe('HeaderFormatterComponent', () => {
  let component: HeaderFormatterComponent;
  let fixture: ComponentFixture<HeaderFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
