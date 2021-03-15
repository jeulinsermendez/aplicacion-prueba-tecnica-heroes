import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('Service: Authentication', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService],
      imports:[HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should ...', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
