import {
  Link,
} from 'react-router-dom'
import {
  useOktaAuth,
} from '@okta/okta-react'

export default function Nav() {
  const {
    authState, oktaAuth,
  } = useOktaAuth()

  return (
    <header>
      <nav>
        <Link
          id="home-nav-link"
          to="/"
        >
          Home
        </Link>
        <Link
          id="protected-nav-link"
          to="/protected"
        >
          Protected
        </Link>
      </nav>
      <hr />
      {
        !authState || !authState.isAuthenticated
          ? (
            <>
              <p>
                Please log in
              </p>
              <button
                onClick={ () => oktaAuth.signInWithRedirect() }
                type="button"
              >
                Login
              </button>
            </>
          )
          : (
            <>
              <p>
                You&apos;re logged in!
              </p>
              <button
                onClick={ () => oktaAuth.signOut() }
                type="button"
              >
                Logout
              </button>
            </>
          )
      }
    </header>
  )
}
