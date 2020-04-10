import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";

class AppRouter extends React.Component {
  render() {
    const routes = this.props.routes;
    return (
      <BrowserRouter>
        <div className="row">
          <div className="col-3 ">
            <Sidebar routes={routes}
            />
          </div>

          <div className="col-9 ">
            <Switch>
              {routes.map((route, index) => {
                console.log(route, "fdsxg");
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
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
