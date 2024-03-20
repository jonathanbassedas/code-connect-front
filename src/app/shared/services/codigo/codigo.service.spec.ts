import { TestBed } from '@angular/core/testing';

import { CodigoService } from './codigo.service';

describe('CodigoService', () => {
  let service: CodigoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
