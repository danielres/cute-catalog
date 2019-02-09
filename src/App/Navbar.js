import Cookies from 'js-cookie'
import React from 'react'
import { NavLink } from 'redux-first-router-link'

import { onLogout } from 'api'
import { toHome, toLogin, toProfile } from 'store/routerActions'

const NavbarItem = ({ children, className, onClick, to }) => (
  <li className="nav-item">
    <NavLink
      className={'nav-link ' + className}
      exact
      onClick={onClick}
      to={to}
    >
      {children}
    </NavLink>
  </li>
)

const Navbar = () => {
  const isLoggedIn = !!Cookies.get('authExpiresAt')

  return (
    <nav className="navbar navbar-expand navbar-light bg-white rounded-bottom pl-0 pr-0">
      <ul className="navbar-nav">
        <NavbarItem className="pl-0" to={toHome()}>
          Home
        </NavbarItem>
      </ul>

      <ul className="navbar-nav ml-auto">
        {isLoggedIn ? (
          <>
            <NavbarItem to={toProfile()}>Profile</NavbarItem>
            <NavbarItem onClick={onLogout}>Logout</NavbarItem>
          </>
        ) : (
          <NavbarItem className="pr-0" to={toLogin()}>
            Login
          </NavbarItem>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
