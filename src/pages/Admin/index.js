import { connect } from 'react-redux'

import Admin from './Admin'

const mapStateToProps = ({ currentUser: { currentUser, isLoading } }) => ({
  currentUser,
  isLoading,
})

export default connect(mapStateToProps)(Admin)
