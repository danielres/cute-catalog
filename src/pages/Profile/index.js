import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import Profile from './Profile'

const mapStateToProps = () => ({ isLoggedIn: !!Cookies.get('authExpiresAt') })

export default connect(mapStateToProps)(Profile)
