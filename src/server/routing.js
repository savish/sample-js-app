// @flow

import renderApp from "./render-app";
import { homePage } from "./controller";
import { HOME_PAGE_ROUTE } from "../shared/routes";

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, { userAgent: req.headers["user-agent"] }, homePage()));
  });

  app.get("*", (req, res) => {
    res.status(404).send("404 Page not found");
  });

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
  });
};
