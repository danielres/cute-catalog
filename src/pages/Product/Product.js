import Link from 'redux-first-router-link'
import React from 'react'

import { toProduct } from 'store/routerActions'

import Loader from 'shared/Loader'
import ProductCard from 'shared/ProductCard'

const Product = ({ isLoading, product, nextProduct, prevProduct }) => (
  <Loader isLoading={isLoading}>
    <div className="row">
      <div className="col-1">
        <Link
          className="link-gray"
          to={toProduct({ productId: prevProduct.id })}
        >
          prev
        </Link>
      </div>

      <h2 className="col text-center">{product.title}</h2>

      <div className="col-1">
        <Link
          className="link-gray"
          to={toProduct({ productId: nextProduct.id })}
        >
          next
        </Link>
      </div>
    </div>
    <ProductCard product={product} />
  </Loader>
)

export default Product
