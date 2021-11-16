import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

// import { Dashboard } from "../pages/Dashboard";
// import { Repo } from "../pages/Repo";
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Repo = lazy(() => import("../pages/Repo"));

export const Routes: React.FC = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Switch>
        <Route component={Repo} path="/repositories/:repository+" />
        <Route component={Dashboard} path="/" />
      </Switch>
    </Suspense>
  );
};
