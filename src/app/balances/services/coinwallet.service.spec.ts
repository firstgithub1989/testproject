import { TestBed, inject } from '@angular/core/testing';

import { CoinwalletService } from './coinwallet.service';

describe('CoinwalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinwalletService]
    });
  });

  it('should be created', inject([CoinwalletService], (service: CoinwalletService) => {
    expect(service).toBeTruthy();
  }));
});
