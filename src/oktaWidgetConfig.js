import {
  oktaLoginRedirect,
} from './constants/auth'
import ENV from './constants/env'

export default {
  issuer: ENV._OKTA_ISSUER,
  clientId: ENV._OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}${oktaLoginRedirect}`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsCheck: false,
}
