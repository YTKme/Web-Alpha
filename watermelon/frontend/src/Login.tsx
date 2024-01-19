/**
 * Login
 */

import { useEffect, useState } from 'react';
// Okta
import { useOktaAuth } from '@okta/okta-react';

import './Login.scss'

import watermelonLogo from '/res/img/watermelon.svg'
import { UserClaims } from '@okta/okta-auth-js';

function Login() {
  // State
  const { authState, oktaAuth } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<UserClaims | undefined>(undefined);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(undefined);
    } else {
      oktaAuth.getUser().then((info) => {
        setUserInfo(info);
      }).catch((err) => {
        console.error(err);
      });
    }
  }, [authState, oktaAuth]); // Update if authState changes

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/home' });
    console.debug(`Login: ${oktaAuth.isAuthenticated}`);
  };

  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className='d-flex flex-column h-100'>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        {authState.isAuthenticated && (
          <main className='text-center'>
            <h1>Authenticated: Name</h1>
          </main>
        )}

        {!authState.isAuthenticated && (
          <main className='text-center'>
            <img src={watermelonLogo} width='128' alt='Watermelon Logo' />
            <h1>Please Login</h1>
            <h2></h2>
            <form>
              <section className='text-center'>
                <button
                  className='btn btn-primary w-100 py-2'
                  onClick={login}
                >
                  Login
                </button>
              </section>
            </form>
          </main>
        )}
      </div>
    </div>
  );
}

export default Login;
