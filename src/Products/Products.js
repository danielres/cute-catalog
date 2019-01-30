import Link from 'redux-first-router-link'
import React from 'react'

import { toProduct } from 'store/routerActions'

import ProductCard from 'shared/ProductCard'

const Product = ({ product }) => (
  <div className="card-deck col-md-4">
    <Link
      className="d-flex link-gray"
      to={toProduct({ productId: product.id })}
    >
      <ProductCard product={product} />
    </Link>
  </div>
)

export default ({ products }) => (
  <>
    <h2 className="invisible">Products</h2>

    <div className="row">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </>
)
