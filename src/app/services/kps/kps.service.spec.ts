import { TestBed } from '@angular/core/testing';

import { KpsService } from './kps.service';

describe('KpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KpsService = TestBed.get(KpsService);
    expect(service).toBeTruthy();
  });
});
