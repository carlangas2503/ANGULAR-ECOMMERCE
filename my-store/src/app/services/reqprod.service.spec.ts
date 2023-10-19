import { TestBed } from '@angular/core/testing';

import { ReqprodService } from './reqprod.service';

describe('ReqprodService', () => {
  let service: ReqprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
