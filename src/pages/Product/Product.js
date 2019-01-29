import React from 'react'

import Loader from 'shared/Loader'
import ProductCard from 'shared/ProductCard'

const Product = ({ isLoading, product }) => (
  <Loader isLoading={isLoading}>
    <h2>{product.title}</h2>
    <ProductCard product={product} />
  </Loader>
)

export default Product
