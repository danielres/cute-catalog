import Link from 'redux-first-router-link'
import React from 'react'

import { closeModal } from 'Modals/bus'
import { toLogin } from 'store/routerActions'

export default () => (
  <>
    <p>A confirmation email has been sent to you.</p>
    <p>
      Please check your mailbox and use the provided confirmation link to
      activate your account.
    </p>
    <p>
      <Link onClick={closeModal} to={toLogin()}>
        Login
      </Link>
    </p>
  </>
)
