import { TestBed } from '@angular/core/testing';
import {HttpInterceptorFn, provideHttpClient} from '@angular/common/http';

import { authInterceptor } from './auth-interceptor';
import {Auth} from '../services/auth';
import {provideRouter} from '@angular/router';
import {provideHttpClientTesting} from '@angular/common/http/testing';

describe('authInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => authInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth, provideRouter([]), provideHttpClient(), provideHttpClientTesting()]
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
