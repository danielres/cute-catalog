import React from 'react'

const ProductCard = ({ product }) => (
  <div className="card mb-4 box-shadow">
    <img
      className="card-img-top"
      alt="Thumbnail"
      src={`https://placekitten.com/320/240?image=${product.id}`}
    />

    <div className="card-body">
      <p className="card-text">{product.title}</p>
    </div>
  </div>
)

export default ProductCard
