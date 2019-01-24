import { lazy } from 'react';
import * as Layouts from './layouts';

const Home = lazy(() => import('./pages/Home'));
const Todos = lazy(() => import('./pages/Todos'));


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
];

export default routes;
