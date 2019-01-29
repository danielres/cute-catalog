import React from 'react'

import Loader from 'shared/Loader'
import LoginStatus from './LoginTimer'

const Label = ({ children }) => <div className="col-3">{children}</div>
const Value = ({ children }) => <div className="col-9">{children}</div>

const Profile = ({ currentUser, isLoading }) => (
  <Loader isLoading={isLoading}>
    <div className="mt-3 mb-3 bg-gray p-3 rounded">
      <div className="row">
        <Label>Name:</Label>
        <Value>{currentUser.name}</Value>
      </div>

      <div className="row">
        <Label>Email:</Label>
        <Value>{currentUser.email}</Value>
      </div>

      <div>
        <LoginStatus />
      </div>
    </div>
  </Loader>
)

export default Profile
