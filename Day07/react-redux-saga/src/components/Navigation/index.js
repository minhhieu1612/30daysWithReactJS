import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  onLogin = () => {
    localStorage.setItem('isAdmin', true)
  }

  onLogout = () => {
    localStorage.setItem('isAdmin', false)
  }

  render() {
    return (
      <ul style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px' }}>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/carts">Carts</NavLink></li>
        <li><button onClick={this.onLogin}>Login</button></li>
        <li><button onClick={this.onLogout}>Logout</button></li>
      </ul >
    )
  }
}

export default Navigation
