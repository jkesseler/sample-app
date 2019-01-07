import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import { Frontload } from 'react-frontload';
import configureStore from './app/state';
import BaseView from './app/views/Base';


const storeInstance = configureStore();

const Application = (
  <Provider store={storeInstance}>
    <Frontload noServerRender>
      <BaseView>
        <p>This must be replace with the router config</p>
      </BaseView>
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
