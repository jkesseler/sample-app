import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';

export const AppRouter = ({ routes }) => (
  <Switch>
    {routes.map(({
      component, path, layout, exact,
    }) => (
      <AppRoute
        component={component}
        key={path}
        path={path}
        layout={layout}
        exact={exact || false}
      />
    ))}
  </Switch>
);

AppRouter.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.element.isRequried,
      path: PropTypes.string.isRequired,
      layout: PropTypes.element.isRequried,
      exact: PropTypes.bool,
    }),
  ).isRequired,
};

export default AppRouter;