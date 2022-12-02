import { TestBed } from '@angular/core/testing';

import { LibroServicioService } from './libro-servicio.service';

describe('LibroServicioService', () => {
  let service: LibroServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
