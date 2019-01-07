import { Home, Todos } from '../pages';
import Base from '../views/Base';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
    view: Base,
  }, {
    path: '/todos',
    component: Todos,
    exact: true,
    view: Base,
  },
];

export default routes;
