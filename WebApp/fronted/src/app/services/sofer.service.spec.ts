import { TestBed } from '@angular/core/testing';

import { SoferService } from './sofer.service';

describe('SoferService', () => {
  let service: SoferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
