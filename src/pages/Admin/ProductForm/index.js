import { connect } from 'react-redux'

import ProductForm from './ProductForm'

const emptyObject = {}
const newProduct = { title: '', description: '', imageSrc: '' }

const mapStateToProps = ({
  products: { items: products },
  location: { query: { product: productId } = emptyObject } = emptyObject,
}) => {
  const isNew = productId === 'new'

  return {
    product: isNew ? newProduct : products[productId],
  }
}

const mapDispatchtoProps = () => ({
  onSubmit: values => console.log({ values }),
})

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(ProductForm)
