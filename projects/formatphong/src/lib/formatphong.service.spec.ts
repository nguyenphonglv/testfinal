import { TestBed } from '@angular/core/testing';

import { FormatphongService } from './formatphong.service';

describe('FormatphongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatphongService = TestBed.get(FormatphongService);
    expect(service).toBeTruthy();
  });
});
