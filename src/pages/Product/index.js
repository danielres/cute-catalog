import { connect } from 'react-redux'

import getNextItem from './getNextItem'
import getPrevItem from './getPrevItem'

import Product from './Product'

const emptyObject = {}

const mapStateToProps = ({ location, products }) => {
  const { productId } = location.payload
  const product = products.items[productId] || emptyObject

  const nextProduct =
    getNextItem({ items: products.items, currId: product.id }) || emptyObject

  const prevProduct =
    getPrevItem({ items: products.items, currId: product.id }) || emptyObject

  return {
    isLoading: !product.title,
    nextProduct,
    prevProduct,
    product,
  }
}

export default connect(mapStateToProps)(Product)
