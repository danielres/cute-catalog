import { connect } from 'react-redux'

import Admin from './Admin'

const mapStateToProps = ({
  currentUser: { currentUser, isLoading },
  location: { query = {} },
}) => {
  const productId = query.product

  return {
    currentUser,
    isLoading,
    productId,
  }
}

export default connect(mapStateToProps)(Admin)
