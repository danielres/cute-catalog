import React from 'react'

const ProductCard = ({ product, imageOnly }) => (
  <div className="card mb-4 box-shadow">
    <img className="card-img-top" alt="Thumbnail" src={product.imageSrc} />

    {!imageOnly && (
      <div className="card-body">
        <p className="card-text text-center text-muted">
          {product.description}
        </p>
      </div>
    )}
  </div>
)

export default ProductCard
