import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Thread } from "../pages/Thread";
import { P404 } from "../pages/P404";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/thread/:thread_slug" component={Thread}></Route>
      <Route exact path="/sobre" component={About}></Route>
      <Route exact path="/404" component={P404}></Route>
      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
