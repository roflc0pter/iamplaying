import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Settings } from "./components/Settings";

export const routes = (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/settings" exact component={Settings} />
  </Switch>
);
