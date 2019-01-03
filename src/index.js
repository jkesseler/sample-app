import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import TodoApp from './client/components/TodoApp';
import configureStore from './state';

const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <Frontload noServerRender>
      <TodoApp />
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
