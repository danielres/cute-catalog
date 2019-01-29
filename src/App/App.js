import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

import Product from '../pages/Product'
import Products from '../Products'
import Profile from '../pages/Profile'
import LoginBox from '../pages/Login/LoginBox'
import Navbar from './Navbar'

import GlobalStyle from './GlobalStyle'

const App = ({ page }) => (
  <div className="container">
    <GlobalStyle />

    <Navbar />
    <div className="pt-3">
      {page === 'HOME' && <Products />}

      {page === 'LOGIN' && <LoginBox />}

      {page === 'PRODUCT' && <Product />}

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
