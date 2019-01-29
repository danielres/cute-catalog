import React from 'react'

const Product = ({ children, index }) => (
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img
        class="card-img-top"
        alt="Thumbnail"
        src={`https://placekitten.com/320/240?image=${index + 1}`}
      />
      <div class="card-body">
        <p class="card-text">{children}</p>
      </div>
    </div>
  </div>
)

export default ({ products }) => (
  <div className="row">
    {products.map((p, i) => (
      <Product index={i} key={i}>
        {p.title}
      </Product>
    ))}
  </div>
)
