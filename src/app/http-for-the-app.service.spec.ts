import { TestBed } from '@angular/core/testing';

import { HttpForTheAppService } from './http-for-the-app.service';

describe('HttpForTheAppService', () => {
  let service: HttpForTheAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpForTheAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
