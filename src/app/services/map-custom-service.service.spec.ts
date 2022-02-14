import { TestBed } from '@angular/core/testing';

import { MapCustomServiceService } from './map-custom-service.service';

describe('MapCustomServiceService', () => {
  let service: MapCustomServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapCustomServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
