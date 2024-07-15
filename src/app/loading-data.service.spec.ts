import { TestBed } from '@angular/core/testing';

import { LoadingDataService } from './loading-data.service';

describe('LoadingDataService', () => {
  let service: LoadingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
