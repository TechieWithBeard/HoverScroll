import { TestBed } from '@angular/core/testing';

import { NgxMatHoverScrollService } from './ngx-mat-hover-scroll.service';

describe('NgxMatHoverScrollService', () => {
  let service: NgxMatHoverScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatHoverScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
