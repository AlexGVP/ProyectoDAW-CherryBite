import { TestBed } from '@angular/core/testing';

import { ConsultarComidasService } from './consultar-comidas.service';

describe('ConsultarComidasService', () => {
  let service: ConsultarComidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarComidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
