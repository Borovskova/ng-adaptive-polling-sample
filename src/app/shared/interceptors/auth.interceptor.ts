import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';

import { OktaAuthService } from '../services/okta.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const oktaAuthenticationService = inject(OktaAuthService);
  if (oktaAuthenticationService.idToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${oktaAuthenticationService.idToken.idToken}`,
      },
    });
  }

  return next(req);
};
