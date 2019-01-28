import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

import { onFetchPrivateData } from './api'

import Products from './Products'
import LoginBox from './pages/Login/LoginBox'

const App = () => (
  <div className="container">
    <div className="header">
      <button onClick={onFetchPrivateData}>fetch private data</button>
    </div>
    <LoginBox />

    <h1>Products</h1>
    <Products />
  </div>
)

export default App
