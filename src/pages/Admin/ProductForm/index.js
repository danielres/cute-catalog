import { connect } from 'react-redux'

import ProductForm from './ProductForm'

const emptyObject = {}

const mapStateToProps = ({
  products: { items: products },
  location: { query: { product: productId } = emptyObject } = emptyObject,
}) => ({
  product: products[productId],
})

const mapDispatchtoProps = () => ({
  onSubmit: values => console.log({ values }),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProductForm)
