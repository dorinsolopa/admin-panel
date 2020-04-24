import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppLayout from "./AppLayout"
class AppRouter extends React.Component {
  render() {
    const routes = this.props.routes;
    const allRoutes = [].concat(routes, this.props.publicRoutes)
    return (
      <BrowserRouter>
      <AppLayout routes={routes} >
        
            <Switch>
              {allRoutes.map((route, index) => {
                return (
                  <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    icon={route.icon}
                    key={route.path}
                  />
                );
              })}
              <Route
                component={() => {
                  return <div>oops ERROR</div>;
                }}
              />
            </Switch>
        </AppLayout>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
