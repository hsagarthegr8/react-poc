import React, { Component } from "react";
import Topbar from "./Topbar/Topbar";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainContent from './MainContent/MainContent';
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Topbar />
          <MainContent />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
