import { TestBed } from '@angular/core/testing';

import { AlimentareService } from './alimentare.service';

describe('AlimentareService', () => {
  let service: AlimentareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
