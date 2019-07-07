import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Paper, createStyles, withStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";

import { GenericForm } from "../GenericForm";
import { loginForm } from "../../forms";
import { login } from "./actions";

const styles = createStyles({
  paper: {
    padding: "2em"
  }
});

class Login extends Component {
  handleSubmit = (values) => {
    const { login } = this.props;
    login(values);
  };

  render() {
    const { classes, isLoggedIn } = this.props;
    console.log(isLoggedIn);
    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    }
    return (
      <Grid item xs={10} sm={4}>
        <Paper square className={classes.paper}>
          <GenericForm form={loginForm} onSubmit={this.handleSubmit} />
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(withStyles(styles)(Login));
