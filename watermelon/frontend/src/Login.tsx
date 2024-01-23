/**
 * Login
 */

import { useEffect, useState } from 'react';
// Okta
import { useOktaAuth } from '@okta/okta-react';
import { UserClaims } from '@okta/okta-auth-js';

// Style
import './scss/Login.scss'

import watermelonLogo from '/res/img/watermelon.svg'

function Login() {
  // State
  const { authState, oktaAuth } = useOktaAuth();
  const [userProfile, setUserProfile] = useState<UserClaims | null>(null);

  useEffect(() => {
    if (!authState || !authState.isAuthenticated) {
      // When user is not authenticated, forget any `userProfile` information
      setUserProfile(null);
    } else {
      oktaAuth.getUser().then((profile) => {
        setUserProfile(profile);
      });
    }
  });

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/login' });
  };

  if (!authState) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className='d-flex flex-column h-100'>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        {/* Authenticated */}
        {authState.isAuthenticated && userProfile && (
          <main className='text-center'>
            <h1>Authenticated: {userProfile.name}</h1>
          </main>
        )}
        {/* Not Authenticated */}
        {!authState.isAuthenticated && (
          <main className='text-center'>
            <img src={watermelonLogo} width={128} alt='Watermelon Logo' />
            <h1>Please Login</h1>
            <form>
              <section className='text-center'>
                <button className='btn btn-primary w-100 py-2' type='button' onClick={login}>Login</button>
              </section>
            </form>
          </main>
        )}
      </div>
    </div>
  );
}

export default Login;
