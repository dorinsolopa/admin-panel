import Dashboard from '../pages/dashboard/Dashboard';
import Charts from '../pages/charts/Charts';
import Tables from '../pages/tables/Tables';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Dashboard,
    name: ' Dashboard',
    menu: true,
    icon: 'fa fa-tachometer',
  },

  {
    path: '/Charts',
    exact: true,
    component: Charts,
    name: 'Charts',
    menu: true,
    icon: 'fa fa-area-chart',
  },
  {
    path: '/Tables',
    exact: true,
    component: Tables,
    name: 'Tables',
    menu: true,
    icon: 'fa fa-table',
  },
];
