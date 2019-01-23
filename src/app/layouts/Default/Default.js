import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import Header from '~ui/Header';
import routes from '../../routes';

import styles from './Default.module.css';

export const Default = ({ children }) => (
  <div className={styles.main}>
    <Paper
      elevation={0}
      className={styles.content}
    >
      <Header menuItems={routes}>Todos</Header>
      { children }
    </Paper>

    <footer className={styles.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer>
  </div>
);

Default.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default memo(Default);
