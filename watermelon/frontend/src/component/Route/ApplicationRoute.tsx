/**
 * Application Route
 */

import { Route, Routes } from "react-router-dom";
// Okta
import { LoginCallback } from "@okta/okta-react";

// Page
import Flash from "../../page/Flash";
import Home from "../../page/Home";
import Login from "../../page/Login";
import Main from "../../page/Main";
import Profile from "../../page/Profile";
import SecureRoute from "./SecureRoute";

function ApplicationRoute() {
  return (
    <Routes>
      {/* Root */}
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />
      {/* Page */}
      <Route path='/home' element={<Home />} />
      <Route path='/flash' element={<Flash />} />
      {/* Authentication */}
      <Route path='/login' element={<Login />} />
      <Route path='/login/callback' element={<LoginCallback loadingElement={<h3>Loading...</h3>} />} />
      {/* Secure */}
      <Route path='/profile' element={<SecureRoute />}>
        <Route path='' element={<Profile />} />'
      </Route>
    </Routes>
  );
}

export default ApplicationRoute;
