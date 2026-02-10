import { TestBed } from '@angular/core/testing';
import {CanActivateFn, provideRouter, Router} from '@angular/router';

import { authGuard } from './auth-guard';
import {Auth} from '../services/auth';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {vi} from 'vitest';

describe('authGuard', () => {

  let authServiceMock: any;
  let routerMock: any;


  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    authServiceMock = {
      getToken: vi.fn()
    };
    routerMock = {
      navigate: vi.fn()
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: Auth, useValue: authServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    });
  });

  it('should return true if a valid token exists (Authorized Access)', () => {
    authServiceMock.getToken.mockReturnValue('valid-jwt-token');

    const result = executeGuard({} as any, {} as any);

    expect(result).toBe(true);
    expect(routerMock.navigate).not.toHaveBeenCalled();
  });

  it('should redirect to / and return false if no token exists (Unauthorized Redirect)', () => {
    authServiceMock.getToken.mockReturnValue(null);

    const result = executeGuard({} as any, {} as any);

    expect(result).toBe(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
  });

});
