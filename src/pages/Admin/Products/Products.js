import { NavLink } from 'redux-first-router-link'
import React from 'react'

import { toAdminProduct } from 'store/routerActions'

import ProductCard from 'shared/ProductCard'

const Product = ({ product }) => (
  <div className="col-6 col-md-3">
    <NavLink to={toAdminProduct({ productId: product.id })}>
      <ProductCard imageOnly product={product} />
    </NavLink>
  </div>
)

export default ({ products }) => (
  <>
    <div className="row small-gutters">
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  </>
)
