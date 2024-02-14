import { TestBed } from '@angular/core/testing';

import { ApiStocksService } from './api-stocks.service';

describe('ApiStocksService', () => {
  let service: ApiStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
