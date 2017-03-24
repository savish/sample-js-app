// @flow

import React from "react";

// -- Material-UI
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";

const Styles = {
  paper: {
    marginLeft: "auto",
    marginRight: "auto",
    padding: 24,
    marginTop: 24,
    width: 480,
    textAlign: "center",
  },
};

const HomePage = () => (
  <div>
    <AppBar title="Sample app" />
    <Paper style={Styles.paper} zDepth={5}>
      <h1>Awesome goes here</h1>
    </Paper>
  </div>
);

export default HomePage;
