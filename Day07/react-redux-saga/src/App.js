import React, { Component } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import { ListProductsContainer } from './containers/products'
import { CartListContainer } from './containers/carts'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Content from './components/Content'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <hr></hr>
        <Switch>
          <Route path="/products" component={ListProductsContainer} />
          <Route path="/carts" component={CartListContainer} />
          <Route path="/" render={props => <Content />} />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default App
