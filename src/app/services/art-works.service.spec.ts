import { TestBed } from '@angular/core/testing';

import { ArtWorksService } from './art-works.service';

describe('ArtWorksService', () => {
  let service: ArtWorksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtWorksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
