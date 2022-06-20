import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import Root from './components/root';
import * as sessionActions from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  // const root = document.getElementById('root');

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.login = sessionActions.login;
  window.logout = sessionActions.logout;
  window.signup = sessionActions.signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  
  // ReactDOM.render(<Root store={store} />, root);
  root.render(<Root store={store} />);
});