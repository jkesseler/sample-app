import { lazy } from 'react';
import * as Layouts from './layouts';

const Home = lazy(() => import('./pages/Home'));
const Todos = lazy(() => import('./pages/Todos'));
const Scheduler = lazy(() => import('./pages/Scheduler'));

const routes = [
  {
    component: Home,
    layout: Layouts.Home,
    path: '/',
    exact: true,
    title: 'Home',
  },
  {
    component: Todos,
    layout: Layouts.Default,
    path: '/todos',
    exact: true,
    title: 'Todos',
  },
  {
    component: Scheduler,
    layout: Layouts.Default,
    path: '/schedule',
    exact: true,
    title: 'Scheduler',
    displayFooter: false,
  },
];

export default routes;
