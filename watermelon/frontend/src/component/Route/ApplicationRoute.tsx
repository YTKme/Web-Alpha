/**
 * Application Route
 */

import { Route, Routes } from "react-router-dom";
// Okta
import { LoginCallback } from "@okta/okta-react";

import Home from "../../Home";
import Login from "../../Login";
import SecureRoute from "./SecureRoute";
import Profile from "../../Profile";

function ApplicationRoute() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/callback' element={<LoginCallback loadingElement={<h3>Loading...</h3>} />} />
      <Route path='/profile' element={<SecureRoute />}>
        <Route path='' element={<Profile />} />'
      </Route>
    </Routes>
  );
}

export default ApplicationRoute;
