import React from 'react'
import styled from 'styled-components/macro'
import { onLogin } from '../../api'

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
    <div className="mt-3 mb-3 bg-gray jumbotron">
      <h2 className="mb-5">Please sign in</h2>

      <a
        className="btn btn-lg btn-primary btn-block"
        href="/api/login/facebook"
      >
        Sign in with facebook
      </a>

      <Or />

      <form>
        <input
          autoFocus
          className="form-control"
          id="email"
          name="email"
          placeholder="Email address"
          required
          type="email"
        />
        <input
          className="form-control"
          id="password"
          name="password"
          placeholder="Password"
          required
          type="password"
        />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={onLogin}
        >
          Sign in with email / password
        </button>
      </form>
    </div>
  )
}

export default LoginBox
