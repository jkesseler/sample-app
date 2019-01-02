import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
// import { ConnectedRouter } from 'connected-react-router';
import createStore from './shared/store';

import TodoApp from './client/components/TodoApp';

// Create a store and get back itself and its history object
const { store } = createStore();

// In local development use <ConnectedRouter /> rather than <StaticRouter /> on the server
// Also let React Frontload explicitly know we're not rendering on the server here
const Application = (
  <Provider store={store}>
    <Frontload noServerRender>
      <TodoApp />
    </Frontload>
  </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
  // If it's an SSR, we use hydrate to get fast page loads by just
  // attaching event listeners after the initial render
  Loadable.preloadReady().then(() => {
    ReactDOM.hydrate(Application, root);
  });
} else {
  // If we're not running on the server, just render like normal
  ReactDOM.render(Application, root);
}
