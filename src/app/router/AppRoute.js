import React, { Suspense, memo } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
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

/* eslint-disable react/forbid-prop-types */
AppRoute.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default memo(AppRoute);
