import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Layout from './Layout';


// TODO: Add Header, Footer and navigation
const AppBase = ({ children }) => (
  <CssBaseline>
    <Layout>
      { children }
    </Layout>
  </CssBaseline>
);

AppBase.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppBase;
