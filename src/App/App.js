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
  .box-shadow { box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }
`

const App = ({ page }) => (
  <div className="container">
    <GlobalStyle />

    <Navbar />
    <div className="pt-3">
      {page === 'HOME' && <Products />}

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
