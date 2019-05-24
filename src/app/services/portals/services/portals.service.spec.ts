import { TestBed } from '@angular/core/testing';

import { PortalsService } from './portals.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalsService = TestBed.get(PortalsService);
    expect(service).toBeTruthy();
  });
});
