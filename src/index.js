import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import configureStore from './app/state';
import AppBase from './app/components/AppBase';
import Todos from './app/views/Todos';

const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <Frontload noServerRender>
      <AppBase>
        <Todos />
      </AppBase>
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
