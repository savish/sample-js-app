import _ from "lodash";
import { call } from "redux-saga/effects";
import { default as I } from "immutable";
import reducer, * as models from "../models";

test("reducer should start with an empty map", () => {
  expect(I.is(reducer(), I.Map())).toBe(true);
});

test("reducer should return the same state with no action", () => {
  const state = { test: "state" };
  expect(I.is(reducer(I.fromJS(state)), I.Map(state))).toBe(true);
});

test("reducer should return the same state with an empty action", () => {
  const state = { test: "state" };
  expect(I.is(reducer(I.fromJS(state), {}), I.Map(state))).toBe(true);
});

/* eslint-disable no-console */
test("models.modelSaga should yield a call to console.log first", () => {
  expect(_.isEqual(models.modelSaga().next().value, call(console.log, "Hello, sagas!"))).toBe(true);
});
/* eslint-enable no-console */
