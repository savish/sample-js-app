// @flow

export const WEB_PORT = process.env.PORT || 8192;
export const WDS_PORT = 7777;

export const STATIC_PATH = "/static";
export const APP_NAME = "Sample app";
export const APP_CONTAINER_CLASS = "sample-app";
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`;

export const isProd = process.env.NODE_ENV === "production";
