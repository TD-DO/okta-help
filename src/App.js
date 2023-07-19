import {
  useNavigate,
} from 'react-router-dom'
import {
  Security,
} from '@okta/okta-react'
import {
  OktaAuth,
  toRelativeUrl,
} from '@okta/okta-auth-js'

import Nav from './components/Nav'
import Routes from './components/Routes'
import oktaWidgetConfig from './oktaWidgetConfig'

function App() {
  const oktaAuth = new OktaAuth(oktaWidgetConfig)

  const navigate = useNavigate()
  const restoreOriginalUri = (_oktaAuth, originalUri) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin))
  }

  return (
    <Security
      oktaAuth={ oktaAuth }
      restoreOriginalUri={ restoreOriginalUri }
    >
      <Nav />
      <main>
        <Routes />
      </main>
    </Security>
  )
}

export default App
