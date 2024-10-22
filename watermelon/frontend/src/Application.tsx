/**
 * Application
 * Main Application
 */

import reactArrayToTree from 'react-array-to-tree';
import { useNavigate } from 'react-router-dom';

// Okta
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

import ApplicationRoute from './component/Route/ApplicationRoute';
import configuration from './configuration';

// Context
import BootstrapProvider from './context/BootstrapContext';

// Style
import './Application.scss';

const oktaAuth = new OktaAuth(configuration.oidc)

const ProviderTree = reactArrayToTree([
  <BootstrapProvider children={undefined} />,
]);

export default function Application() {
  const navigate = useNavigate();

  const restoreOriginalUri = async (_oktaAuth: unknown, originalUri: string) => {
    navigate(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
    >
      <ProviderTree>
        <ApplicationRoute />
      </ProviderTree>
    </Security>
  );
};
