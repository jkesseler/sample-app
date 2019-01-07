import React, { memo } from 'react';

import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';

export const Header = () => (
  <AppBar color="primary" position="static" style={{ height: 64 }}>
    <Toolbar style={{ height: 60 }}>
      <Typography color="inherit">Todo App</Typography>
    </Toolbar>
  </AppBar>
);

export default memo(Header);
