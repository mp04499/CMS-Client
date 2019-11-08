import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import './css/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { UserProvider } from './components/contexts/UserContext';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'production'
  ? serviceWorker.register()
  : serviceWorker.unregister();
