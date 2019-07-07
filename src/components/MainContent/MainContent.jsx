import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Home from "../Home/Home";
import { Grid } from "@material-ui/core";

class MainContent extends Component {
  render() {
    return (
      <Grid
        container
        style={{ height: 500 }}
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Grid>
    );
  }
}

export default MainContent;
