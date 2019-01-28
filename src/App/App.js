import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

import Products from '../Products'
import Profile from '../pages/Profile'
import LoginBox from '../pages/Login/LoginBox'
import Navbar from './Navbar'

import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  .bg-gray {
    background: #e9ecef;
  }
`

const App = ({ page }) => (
  <div className="container">
    <GlobalStyle />
    <Navbar />
    <div className="pt-3">
      {page === 'HOME' && (
        <div>
          <h1>Products</h1>
          <Products />
        </div>
      )}

      {page === 'LOGIN' && (
        <div>
          <LoginBox />
        </div>
      )}

      {page === 'PROFILE' && (
        <div>
          <h1>Profile</h1>
          <Profile />
        </div>
      )}
    </div>
  </div>
)

export default App
