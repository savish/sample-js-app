// @flow

export type Action = {
  type: string,
  payload?: Object | Error,
  error?: boolean,
  meta?: Object,
};
