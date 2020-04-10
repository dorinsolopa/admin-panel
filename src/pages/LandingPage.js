import React from 'react';
import Sidebar from './sidebar/Sidebar';
import {Switch, Route, Router} from 'react-router';
import Dashboard from "./dashboard/Dashboard"
import Utilitis from "./utilitis/Utilitis"
import Pages from "./pages/pages"
import Charts from "./charts/Charts"
import Tables from "./tables/Tables"


class LandingPage extends React.Component {

  render() {
   
    return (
      <Router>
        <Switch>
        {routes.map((route, index)=>(
          <Route path="/" component={Dashboard} exact />
          <Route path="/Utilitis" component={Utilitis} exact />
          <Route path="/Pages" component={Pages} exact />
          <Route path="/Charts" component={Charts} exact />
          <Route path="/Tables" component={Tables} exact />
          <Route component={Error} />
        ))}
         
        </Switch>
      </Router>
    );
  }
}
export default LandingPage;
