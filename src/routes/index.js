import React from "react";
import { Provider } from "react-redux";
import store from "../store/index";
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "../Pages/Login/index";
import Airpot from "../Pages/Airport/index";
import NotFound from "../Pages/NotFound";

const AppRouter = withRouter(({ location }) => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/airport" component={Airpot} />
      <Route component={NotFound} />
    </Switch>
  </Provider>
));

export default AppRouter;
