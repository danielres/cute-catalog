import { connect } from 'react-redux'

import Product from './Product'
const emptyObject = {}

const mapStateToProps = ({ location, products }) => {
  const { productId } = location.payload
  const product = products.items[productId] || emptyObject

  return {
    isLoading: !product.title,
    product,
  }
}

export default connect(mapStateToProps)(Product)
