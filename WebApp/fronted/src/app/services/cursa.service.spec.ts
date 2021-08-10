import { TestBed } from '@angular/core/testing';

import { CursaService } from './cursa.service';

describe('CursaService', () => {
  let service: CursaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
