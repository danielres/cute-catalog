import React from 'react'

export default ({ products }) =>
  products.map((p, i) => (
    <div key={i}>
      <div>
        <h2>{p.title}</h2>

        <div>{p.description}</div>
      </div>
      <hr />
    </div>
  ))
