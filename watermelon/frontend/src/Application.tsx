/**
 * Application
 * Main Application
 */

import { Route, Routes, useNavigate } from 'react-router-dom';
// Okta
import { LoginCallback, Security } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import configuration from './configuration';

import ApplicationRoute from './component/Route/ApplicationRoute';

// Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/Application.scss'

const oktaAuth = new OktaAuth(configuration.oidc)

function Application() {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: unknown, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
    >
      <ApplicationRoute />
    </Security>
  );
}

export default Application;
