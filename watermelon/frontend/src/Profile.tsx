/**
 * Profile
 */

import { useEffect, useState } from "react";
// Okta
import { UserClaims } from "@okta/okta-auth-js";
import { useOktaAuth } from "@okta/okta-react";

function Profile() {
  // Context
  const { authState, oktaAuth } = useOktaAuth();
  // State
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

  if (!userProfile) {
    return (
      <div>
        <p>Fetching User Profile...</p>
      </div>
    );
  }

  return (
    <div className='d-flex flex-column h-100'>
      <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <main className='container'>
          <h1>Profile: {userProfile.name}</h1>
          <p>
            Below is the information from your ID token which was obtained during the
            {' '}
            <a href="https://developer.okta.com/docs/guides/implement-auth-code-pkce">PKCE Flow</a>
            {' '}
            and is now stored in local storage.
          </p>
          <p>
            This route is protected with the
            {' '}
            <code>&lt;SecureRoute&gt;</code>
            {' '}
            component, which will ensure that this page cannot be accessed until you have authenticated.
          </p>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Claim</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(userProfile).map((claimEntry) => {
                const claimName = claimEntry[0];
                const claimValue = claimEntry[1];
                const claimId = `claim-${claimName}`;
                return (
                  <tr key={claimName}>
                    <td>{claimName}</td>
                    <td id={claimId}>{claimValue.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}

export default Profile;
