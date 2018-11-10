import { TestBed, inject } from '@angular/core/testing';

import { RailbillService } from './railbill.service';

describe('RailbillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RailbillService]
    });
  });

  it('should be created', inject([RailbillService], (service: RailbillService) => {
    expect(service).toBeTruthy();
  }));
});
