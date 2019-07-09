import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles,
  createStyles
} from "@material-ui/core";

import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../Login/actions";

const styles = createStyles({
  root: {
    flexGrow: 1
  },

  title: {
    textDecoration: "none"
  }
});

export class Topbar extends Component {
  render() {
    const { classes, isLoggedIn, logout } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              to="/"
              className={classes.title}
              component={Link}
            >
              Home
            </Typography>

            <div style={{ flex: 1 }} />
            {isLoggedIn ? (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            ) : (
              <Button color="inherit" to="/login" component={Link}>
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(
  mapStateToProps,
  { logout }
)(withRouter(withStyles(styles)(Topbar)));
