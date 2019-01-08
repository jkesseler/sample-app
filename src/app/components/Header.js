import React, { memo } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

import SimpleMenu from './SimpleMenu';

export const Header = ({ children, menuItems }) => (
  <AppBar color="primary" position="static" style={{ height: 64 }}>
    <Toolbar style={{ height: 60 }}>
      <SimpleMenu menuItems={menuItems} />
      <Typography variant="h6" color="inherit">{ children }</Typography>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default memo(Header);
