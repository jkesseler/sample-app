import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';
import { Frontload } from 'react-frontload';
import configureStore from './app/state';
import Routes from './app/routes';
import routerConfig from './app/routerConfig';

const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <Frontload noServerRender>
      <BrowserRouter>
        <Routes routes={routerConfig} />
      </BrowserRouter>
    </Frontload>
  </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
  // We are on the server
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(Application, root);
  });
} else {
  ReactDOM.render(Application, root);
}
