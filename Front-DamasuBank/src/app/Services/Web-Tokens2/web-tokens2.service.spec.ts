import { TestBed } from '@angular/core/testing';

import { WebTokens2Service } from './web-tokens2.service';

describe('WebTokens2Service', () => {
  let service: WebTokens2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebTokens2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
