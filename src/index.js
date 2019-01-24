import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import configureStore from './app/state';
import AppRouter from './app/router';
import routes from './app/routes';
import './index.css';

const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <CssBaseline />
    <BrowserRouter>
      <AppRouter routes={routes} />
    </BrowserRouter>
  </Provider>
);

const root = document.querySelector('#root');
ReactDOM.render(Application, root);
