import { TestBed, inject } from '@angular/core/testing';

import { InrwalletService } from './inrwallet.service';

describe('InrwalletService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InrwalletService]
    });
  });

  it('should be created', inject([InrwalletService], (service: InrwalletService) => {
    expect(service).toBeTruthy();
  }));
});
