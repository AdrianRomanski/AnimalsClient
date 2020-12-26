import { TestBed } from '@angular/core/testing';

import { DogsDataService } from './dogs-data.service';

describe('DogsDataService', () => {
  let service: DogsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
