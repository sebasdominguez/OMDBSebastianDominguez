import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import Main from "./containers/MainContainer";
import { Provider } from "react-redux";
import history from "./utils/history"
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main} />
    </Router>
  </Provider>,
  document.getElementById("app")
);