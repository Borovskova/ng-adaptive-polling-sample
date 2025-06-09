import { OktaAuthOptions } from '@okta/okta-auth-js';

export const oktaConfig: OktaAuthOptions = {
  issuer: 'https://dev-36032354.okta.com/oauth2/default',
  clientId: '0oanpu62c1bAS9uT35d7',
  redirectUri: `${window.location.origin}/login/callback`,
  pkce: true,
  scopes: ['openid', 'profile', 'email'],
};
