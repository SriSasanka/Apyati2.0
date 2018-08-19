import { TestBed, inject } from '@angular/core/testing';

import { PagesCoreDependencyService } from './pages-core-dependency.service';

describe('PagesCoreDependencyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagesCoreDependencyService]
    });
  });

  it('should be created', inject([PagesCoreDependencyService], (service: PagesCoreDependencyService) => {
    expect(service).toBeTruthy();
  }));
});
