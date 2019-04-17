import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import AppRoute from './AppRoute';


export const AppRouter = ({ routes }) => (
  <Switch>
    {routes.map(({
      component, path, layout, exact = false, title,
    }) => (
      <AppRoute
        component={component}
        key={path}
        path={path}
        layout={layout}
        exact={exact}
        title={title}
      />
    ))}
  </Switch>
);

/* eslint-disable react/forbid-prop-types */
AppRouter.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.any.isRequired,
      path: PropTypes.string.isRequired,
      layout: PropTypes.element.isRequried,
      exact: PropTypes.bool,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default AppRouter;
