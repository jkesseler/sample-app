import * as Pages from './pages';
import * as Layouts from './layouts';

const routerConfig = [
  {
    component: Pages.Home,
    layout: Layouts.Home,
    path: '/',
    exact: true,
    title: 'Home',
  },
  {
    component: Pages.Todos,
    layout: Layouts.Default,
    path: '/todos',
    exact: true,
    title: 'Todos',
  },
];

export default routerConfig;
