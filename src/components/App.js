import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import { Menu, NewColor, Colors } from './containers'
import '../stylesheets/APP.scss'

const App = () =>
    <Switch>
        <Route exact path="/:id"  component={Colors} />
        <Route path="/" component={() => (
            <div className="app">
                <Menu />
                <NewColor />
                <Colors />
            </div>
        )} />
    </Switch>

export default App