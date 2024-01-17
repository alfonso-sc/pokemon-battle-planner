import { TestBed } from '@angular/core/testing';

import { PokeMoveService } from './poke-move.service';

describe('PokeMoveService', () => {
  let service: PokeMoveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeMoveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
