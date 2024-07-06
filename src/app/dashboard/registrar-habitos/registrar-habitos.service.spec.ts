import { TestBed } from '@angular/core/testing';

import { HabitoService } from './registrar-habitos.service';

describe('HabitoService', () => {
  let service: HabitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
