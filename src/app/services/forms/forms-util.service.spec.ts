import { TestBed } from '@angular/core/testing';

import { FormsUtilService } from './forms-util.service';

describe('FormsUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormsUtilService = TestBed.get(FormsUtilService);
    expect(service).toBeTruthy();
  });
});
