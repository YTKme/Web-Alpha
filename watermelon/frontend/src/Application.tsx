/**
 * Application
 * Main Application
 */

import { Route, Routes, useNavigate } from 'react-router-dom';
// Okta
import { LoginCallback, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import configuration from './configuration';

// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/Application.scss'
import Home from './Home';
import Login from './Login';

const oktaAuth = new OktaAuth(configuration.oidc)

function Application() {
  // State

  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: unknown, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/callback' element={<LoginCallback loadingElement={<h3>Loading...</h3>} />} />
      </Routes>
    </Security>
  );
}

export default Application;
