import { TestBed, inject } from '@angular/core/testing';

import { BuySellServicesService } from './buy-sell-services.service';

fdescribe('BuySellServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuySellServicesService]
    });
  });

  it('should be created', inject([BuySellServicesService], (service: BuySellServicesService) => {
    expect(service).toBeTruthy();
  }));
});
