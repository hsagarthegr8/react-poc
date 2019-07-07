import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Typography } from "@material-ui/core";

class Profile extends Component {
  render() {
    const { isLoggedIn, username } = this.props;
    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }
    return <Typography variant="body1">Hello {username}</Typography>;
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  username: state.auth.username
});

export default connect(mapStateToProps)(Profile);
