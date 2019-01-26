import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  state =  { products: []}

  componentDidMount = async () => {
    const { products } = await (await fetch('/api/products')).json()
    this.setState({ products })
  }

  render() {
    return (
      <div className="container">
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
