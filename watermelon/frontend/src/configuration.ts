/**
 * Configuration
 */

const CLIENT_ID = process.env.CLIENT_ID || '';
const ISSUER = process.env.ISSUER || '';
const BASENAME = import.meta.env.BASE_URL || '';
const REDIRECT_URI = `${window.location.origin}${BASENAME}login/callback`;
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;

export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  app: {
    basename: BASENAME,
  }
}
