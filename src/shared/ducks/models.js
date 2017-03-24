// @flow

import { default as I } from "immutable";
import type { fromJS as Im } from "immutable";
import { call } from "redux-saga/effects";

import type { Action } from "../types";

const reducer = (state: Im = I.fromJS({}), action: Action) => {
  if (!action) return state;

  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

/* eslint-disable no-console */
export function* modelSaga(): Generator<*, *, *> {
  yield call(console.log, "Hello, sagas!");
}
/* eslint-enable no-console */
