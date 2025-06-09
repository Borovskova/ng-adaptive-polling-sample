import { inject } from '@angular/core';
import {
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
} from '@angular/router';

import { OktaAuthService } from '../services/okta.service';

export const AuthGuard: CanActivateFn = (
  route,
  state,
): MaybeAsync<GuardResult> => {
  const oktaAuthenticationService = inject(OktaAuthService);
  const router = inject(Router);

  oktaAuthenticationService.setAuthState();

  if (oktaAuthenticationService.isAuthenticated$.value === false)
    router.navigate(['/login']);

  return oktaAuthenticationService.isAuthenticated$.value;
};
