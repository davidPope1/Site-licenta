import { TestBed } from '@angular/core/testing';

import { MasinaService } from './masina.service';

describe('MasinaService', () => {
  let service: MasinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
