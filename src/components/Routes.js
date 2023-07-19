import {
  Route,
  Routes,
} from 'react-router-dom'
import {
  LoginCallback,
} from '@okta/okta-react'
import RequiredAuth from './RequiredAuth'

import Home from './pages/Home'
import Protected from './pages/Protected'
import { oktaLoginRedirect } from '../constants/auth'

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        element={ <Home /> }
        path="/"
      />
      <Route
        element={ <LoginCallback /> }
        path={ oktaLoginRedirect }
      />
      <Route
        element={ <RequiredAuth /> }
        path="/protected"
      >
        <Route
          element={ <Protected /> }
          path=""
        />
      </Route>
    </Routes>
  )
}

export default AppRoutes
