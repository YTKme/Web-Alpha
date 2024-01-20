/**
 * Login
 */

// Okta
import { useOktaAuth } from '@okta/okta-react';

// Style
import './scss/Login.scss'

import watermelonLogo from '/res/img/watermelon.svg'

function Login() {
  // State
  const { authState, oktaAuth } = useOktaAuth();

  const login = async () => {
    oktaAuth.signInWithRedirect({ originalUri: '/' });
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
        {authState.isAuthenticated && (
          <main className='text-center'>
            <h1>Authenticated</h1>
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
