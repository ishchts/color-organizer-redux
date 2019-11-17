import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import storeFactory from './store'
import { Home, About, Events, Products, Contact, Whoops404 } from './pages';
import { HashRouter, Route, Switch } from 'react-router-dom'

const store = storeFactory();

window.React = React;
window.store = store;


render(
  <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
  </Provider>,
  document.getElementById('root')
)

