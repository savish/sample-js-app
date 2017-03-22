// @flow

import React from "react";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import Helmet from "react-helmet";

import HomePage from "./pages/home";

import { APP_NAME } from "./config";
import { HOME_PAGE_ROUTE } from "./routes";

const App = () => (
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
    </Switch>
  </div>
);

export default App;
