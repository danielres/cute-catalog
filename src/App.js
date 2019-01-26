import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

const onLogin = (e) => {
  e.preventDefault()
  fetch('/api/login', { method: 'post', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({username: 'John', password: 'pw'})} )
}

class App extends Component {
  state = { products: []}

  componentDidMount = async () => {
    const { products } = await (await fetch('/api/products')).json()
    this.setState({ products })
  }

  render() {
    return (
      <div className="container">
      <div className="header">
      <button onClick={onLogin}>
        Login
      </button>
      </div>

        <h1>Products</h1>

        {this.state.products.map(p =>
          <>
            <div>
              <h2>
                {p.title}
              </h2>

              <div>
                {p.description}
              </div>
            </div>
            <hr />
          </>
        )}
      </div>
    )
  }
}

export default App
