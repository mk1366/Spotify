import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import LoginPage from './pages/login/Login';
import HomePage from './pages/home/Home';
import CallbackPage from './pages/callback/Callback';

export default function App() {
  return (
    <Router>
      {/* <div>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/callback">
            <CallbackPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div> */}
      test
    </Router>
  );
}