import { TestBed, inject } from '@angular/core/testing';

import { DirectoriesService } from './directories.service';

describe('DirectoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectoriesService]
    });
  });

  it('should be created', inject([DirectoriesService], (service: DirectoriesService) => {
    expect(service).toBeTruthy();
  }));
});
