import Link from 'redux-first-router-link'
import React from 'react'

import { toProduct } from 'store/routerActions'

import Loader from 'shared/Loader'
import ProductCard from 'shared/ProductCard'

const Thumbs = ({ prevProduct, product, nextProduct }) => (
  <div className="row justify-content-center">
    <Link
      className="link-lightgray h5 col-1 text-center my-auto"
      to={toProduct({ productId: prevProduct.id })}
    >
      <i className="fa fa-chevron-left mb-4" />
    </Link>

    <div className="col-8">
      <div className="row">
        <div className="col">
          <Link to={toProduct({ productId: prevProduct.id })}>
            <ProductCard imageOnly product={prevProduct} />
          </Link>
        </div>

        <div className="col">
          <ProductCard imageOnly product={product} />
        </div>

        <div className="col">
          <Link to={toProduct({ productId: nextProduct.id })}>
            <ProductCard imageOnly product={nextProduct} />
          </Link>
        </div>
      </div>
    </div>

    <Link
      className="col-1 text-center my-auto link-lightgray h5"
      to={toProduct({ productId: nextProduct.id })}
    >
      <i className="fa fa-chevron-right mb-4" />
    </Link>
  </div>
)

const Product = ({ isLoading, product, nextProduct, prevProduct }) => (
  <Loader isLoading={isLoading}>
    <h2 className=" text-center">{product.title}</h2>

    <ProductCard product={product} />

    <Thumbs
      prevProduct={prevProduct}
      product={product}
      nextProduct={nextProduct}
    />
  </Loader>
)

export default Product
