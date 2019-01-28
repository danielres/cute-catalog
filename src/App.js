import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

import { onFetchPrivateData, onLogin } from './api'

import Products from './Products'
import LoginStatus from './LoginStatus'

const App = () => (
  <div className="container">
    <div className="header">
      <button onClick={onLogin}>Login</button>
      <a href="/api/login/facebook">Login with FB</a>
      <button onClick={onFetchPrivateData}>fetch private data</button>
    </div>

    <LoginStatus />

    <h1>Products</h1>
    <Products />
  </div>
)

export default App
