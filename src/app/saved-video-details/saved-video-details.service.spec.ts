import { TestBed } from '@angular/core/testing';

import { SavedVideoDetailsService } from './saved-video-details.service';

describe('SavedVideoDetailsService', () => {
  let service: SavedVideoDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedVideoDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
