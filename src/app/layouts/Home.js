import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import routes from '../routes';

import Header from '../components/Header';

export const Home = ({ children }) => (
  <Paper
    elevation={0}
    style={{
      padding: 0,
      margin: 0,
      backgroundColor: '#fafafa',
    }}
  >
    <Header menuItems={routes}>Home</Header>
    { children }
  </Paper>
);

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(Home);
