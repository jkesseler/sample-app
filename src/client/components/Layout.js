import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Paper, Toolbar, Typography,
} from '@material-ui/core';

const Layout = ({ children }) => (
  <Paper
    elevation={0}
    style={{
      padding: 0,
      margin: 0,
      backgroundColor: '#fafafa',
    }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 60 }}>
        <Typography color="inherit">Todo App</Typography>
      </Toolbar>
    </AppBar>
    { children }
  </Paper>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(Layout);
