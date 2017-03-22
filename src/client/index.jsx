// @flow

import "babel-polyfill";
import injectTapEventPlugin from "react-tap-event-plugin";

import { default as I } from "immutable";
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux-immutable";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import App from "../shared/app";
import { APP_CONTAINER_SELECTOR, isProd } from "../shared/config";
import models, { modelSaga } from "../shared/ducks/models";

injectTapEventPlugin();

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__ || { models: {} };
/* eslint-enable no-underscore-dangle */

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ models }),
  I.fromJS(preloadedState),
  composeEnhancers(applyMiddleware(thunkMiddleware, sagaMiddleware)),
);

function* rootSaga() {
  yield [modelSaga];
}

sagaMiddleware.run(rootSaga);

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR);

const wrapApp = (AppComponent, reduxStore) => (
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept("../shared/app", () => {
    // eslint-disable-next-line global-require
    const NextApp = require("../shared/app").default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}
