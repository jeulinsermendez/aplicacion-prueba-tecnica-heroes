import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HeroesBackService } from './heroes-back.service';

describe('HeroesBackService', () => {
  let service: HeroesBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(HeroesBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
