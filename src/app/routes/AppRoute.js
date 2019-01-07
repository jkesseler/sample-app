import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);


const layoutPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  PropTypes.element,
]);


AppRoute.propTypes = {
  component: layoutPropType.isRequired,
  layout: layoutPropType.isRequired,
};

export default memo(AppRoute);
