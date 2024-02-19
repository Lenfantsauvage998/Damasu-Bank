import { TestBed } from '@angular/core/testing';

import { ApiStockService } from './api-stocks.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiStocksService', () => {
  let service: ApiStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ]
    });
    service = TestBed.inject(ApiStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
