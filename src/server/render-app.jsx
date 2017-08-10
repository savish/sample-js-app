// @flow

import "babel-polyfill";
import React from "react";
import ReactDOMServer from "react-dom/server";
import Helmet from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router";

import initStore from "./init-store";
import App from "./../shared/app";
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT, isProd } from "../shared/config";

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
  const store = initStore(plainPartialState);

  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>,
  );
  const head = Helmet.rewind();

  return `<!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        ${head.title}
        ${head.meta}
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
        <link rel="shotcut icon" type="image/x-icon" href="${STATIC_PATH}/images/favicon.ico">
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`;
};

export default renderApp;
