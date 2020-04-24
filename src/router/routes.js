import Dashboard from "../pages/dashboard/Dashboard";
import Charts from "../pages/charts/Charts";
import Tables from "../pages/tables/Tables";
import Login from "../pages/login/Login"

export const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard,
    name: " Dashboard",
    menu: true,
    icon: "fa fa-dashboard "
  },

  {
    path: "/Charts",
    exact: true,
    component: Charts,
    name: "Charts",
    menu: true,
    icon: "fa fa-area-chart",
  },
  {
    path: "/Tables",
    exact: true,
    component: Tables,
    name: "Tables",
    menu: true,
    icon: "fa fa-table",
  },
 
];

 export const publicRoutes = [
  {
    path: "/Login",
    exact: true,
    component: Login,
    name: "Login",
    menu: true,
  },
]