import React, { Component } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routes from './routes'

class App extends Component {

  renderPageFromRoute = routes => {
    if (routes.length) {
      return routes.map(({ path, exact, component }) =>
        <Route path={path} exact={exact} component={component} />)
    }

    return <h1>This page have no content!!</h1 >
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <hr></hr>
        <Switch>
          {this.renderPageFromRoute(routes)}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
