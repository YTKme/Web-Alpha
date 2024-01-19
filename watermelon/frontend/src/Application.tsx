/**
 * Application
 * Main Application
 */

import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
// Okta
import { LoginCallback, Security } from '@okta/okta-react'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'

import configuration from './configuration'

// Page
import Home from './Home'
import Login from './Login'

// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './Application.scss'

const oktaAuth = new OktaAuth(configuration.oidc);

function Application() {
  // State
  const [authRequiredModalOpen, setAuthRequiredModalOpen] = useState(false);

  const navigate = useNavigate();

  const triggerLogin = async () => {
    await oktaAuth.signInWithRedirect();
  };

  const restoreOriginalUri = (_oktaAuth: unknown, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  const customAuthHandler = async () => {
    const previousAuthState = oktaAuth.authStateManager.getPreviousAuthState();
    if (!previousAuthState || !previousAuthState.isAuthenticated) {
      // App initialization stage
      await triggerLogin();
    } else {
      // Ask the user to trigger the login process during token autoRenew process
      setAuthRequiredModalOpen(true);
    }
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/callback' element={<LoginCallback />} />
      </Routes>
    </Security>
  );
}

export default Application;
