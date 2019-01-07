import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Paper } from '@material-ui/core';

import Header from '../../components/Header';


const AppBase = ({ children }) => (
  <CssBaseline>
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: '#fafafa',
      }}
    >
      <Header />
      { children }
    </Paper>
  </CssBaseline>
);

AppBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppBase;
