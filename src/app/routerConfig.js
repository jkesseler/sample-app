import * as Pages from './pages';
import * as Layouts from './layouts';

const routerConfig = [
  {
    component: Pages.Home,
    layout: Layouts.Home,
    path: '/',
    exact: true,
  },
  {
    component: Pages.Todos,
    layout: Layouts.Default,
    path: '/todos',
    exact: true,
  },
];

export default routerConfig;
