import Link from 'redux-first-router-link'
import React from 'react'

import { toProduct } from 'store/routerActions'

import ProductCard from 'shared/ProductCard'

const Product = ({ product }) => (
  <div className="col-md-4">
    <Link to={toProduct({ productId: product.id })} className="link-gray">
      <ProductCard product={product} />
    </Link>
  </div>
)

export default ({ products }) => (
  <div className="row">
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </div>
)
