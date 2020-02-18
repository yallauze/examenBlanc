import { TestBed } from '@angular/core/testing';

import { ChaussureService } from './chaussure.service';

describe('ChaussureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChaussureService = TestBed.get(ChaussureService);
    expect(service).toBeTruthy();
  });
});
