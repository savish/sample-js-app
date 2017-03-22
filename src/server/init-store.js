// @flow

import { default as I } from "immutable";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import models from "../shared/ducks/models";

const initStore = (plainPartialState: ?Object) =>
  createStore(combineReducers({ models }), I.fromJS(plainPartialState || {}));

export default initStore;
