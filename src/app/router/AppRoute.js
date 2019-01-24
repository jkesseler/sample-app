import React, { Suspense, memo } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout {...rest}>
        <Suspense fallback={(
          <div style={{ marginTop: 16 }}>
            <LinearProgress color="secondary" variant="query" />
          </div>
          )}
        >
          <Component {...props} />
        </Suspense>
      </Layout>
    )}
  />
);


const componentPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.func,
  PropTypes.element,
]);


AppRoute.propTypes = {
  component: componentPropType.isRequired,
  layout: componentPropType.isRequired,
};

export default memo(AppRoute);
