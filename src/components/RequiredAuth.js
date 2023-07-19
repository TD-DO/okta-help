import {
  useOktaAuth,
} from '@okta/okta-react'
import {
  toRelativeUrl,
} from '@okta/okta-auth-js'
import {
  Outlet,
} from 'react-router-dom'

export default function RequiredAuth() {
  const {
    oktaAuth, authState,
  } = useOktaAuth()

  if (!authState || !authState?.isAuthenticated) {
    const originalUri = toRelativeUrl(window.location.href, window.location.origin)
    oktaAuth.setOriginalUri(originalUri)
    oktaAuth.signInWithRedirect()

    return null
  }

  return (<Outlet />)
}
