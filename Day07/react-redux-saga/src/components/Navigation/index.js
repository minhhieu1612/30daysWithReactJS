import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import './styles.css'
import routes from '../../routes'

const MenuLink = ({ label, path, exact }) => {
  if (path.length) {
    return <Route path={path} exact={exact} children={({ match }) => {
      let active = match ? 'activeLink' : ''
      return (
        <li className={active}>
          <NavLink to={path}>{label}</NavLink>
        </li>
      )
    }} />
  }
  return ''
}

class Navigation extends Component {
  onLogin = () => {
    localStorage.setItem('isAdmin', true)
  }

  onLogout = () => {
    localStorage.setItem('isAdmin', false)
  }

  render() {
    let menusLink = routes.map(({ path, exact, label }, index) =>
      <MenuLink key={index} path={path} exact={exact} label={label} />)

    return (
      <ul style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px' }}>
        {menusLink}
        <li><button onClick={this.onLogin}>Login</button></li>
        <li><button onClick={this.onLogout}>Logout</button></li>
      </ul >
    )
  }
}

export default Navigation
