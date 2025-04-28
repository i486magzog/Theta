import { TestBed } from '@angular/core/testing';

import { ParallaxMouseService } from './parallax.mouse.service';

describe('ParallaxMouseService', () => {
  let service: ParallaxMouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParallaxMouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
