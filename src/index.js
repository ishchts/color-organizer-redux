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

/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/

render(
    <HashRouter>
        <div className="main">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/events" component={Events} />
                <Route path="/products" component={Products} />
                <Route path="/contact" component={Contact} />
                <Route component={Whoops404} />
            </Switch>
        </div>
    </HashRouter>,
    document.getElementById('root')
)

