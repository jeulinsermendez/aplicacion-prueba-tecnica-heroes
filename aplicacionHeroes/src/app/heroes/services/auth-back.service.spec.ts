import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthBackService } from './auth-back.service';

describe('Service: AuthBack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthBackService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should ...', inject([AuthBackService], (service: AuthBackService) => {
    expect(service).toBeTruthy();
  }));
});
