import { TestBed, inject } from '@angular/core/testing';

import { FillBillService } from './fill-bill.service';

describe('FillBillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FillBillService]
    });
  });

  it('should be created', inject([FillBillService], (service: FillBillService) => {
    expect(service).toBeTruthy();
  }));
});
