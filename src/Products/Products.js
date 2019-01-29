import React from 'react'

const Product = ({ product }) => (
  <div class="col-md-4">
    <div class="card mb-4 box-shadow">
      <img
        class="card-img-top"
        alt="Thumbnail"
        src={`https://placekitten.com/320/240?image=${product.id}`}
      />
      <div class="card-body">
        <p class="card-text">{product.title}</p>
      </div>
    </div>
  </div>
)

export default ({ products }) => (
  <div className="row">
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </div>
)
