import React from 'react'
import styled from 'styled-components/macro'
import { onLogin } from '../../api'

import EmailPasswordForm from './EmailPasswordform'

const Or = styled(({ className }) => (
  <div className={className + ' mt-5 mb-5'}>
    <span>or</span>
  </div>
))`
  text-align: center;
  border-bottom: 1px solid #ccc;
  span {
    position: absolute;
    display: inline-block;
    background: #e9ecef;
    margin-top: -12px;
    padding: 0 10px;
    margin-left: -10px;
  }
`

const LoginBox = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 mt-3 mb-3 ">

        <div className="bg-gray p-5 rounded">
          <a className="btn  btn-primary btn-block" href="/api/login/facebook">
          Sign in with facebook
        </a>

        <Or />

          <EmailPasswordForm />
        </div>
      </div>
    </div>
  )
}

export default LoginBox
