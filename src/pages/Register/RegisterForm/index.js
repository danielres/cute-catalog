import { connect } from 'react-redux'

import * as api from 'api'
import { openModal } from 'Modals/bus'

import RegisterForm from './RegisterForm'

const mapStateToProps = () => ({})

const mapDispatchToProps = () => ({
  onSubmit: async values => {
    try {
      await api.postRegisterForm(values)
      openModal('REGISTRATION_PENDING')
    } catch (e) {
      openModal('ERROR', e)
    }
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm)
