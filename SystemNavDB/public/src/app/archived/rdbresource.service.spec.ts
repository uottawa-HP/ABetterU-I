import { TestBed } from '@angular/core/testing';

import { RdbresourceService } from './rdbresource.service';

describe('RdbresourceService', () => {
  let service: RdbresourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RdbresourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
