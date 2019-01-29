import React from 'react'

import Loader from 'shared/Loader'

const Profile = ({ currentUser, isLoading }) => (
  <Loader isLoading={isLoading}>Logged in as: {currentUser.name}</Loader>
)

export default Profile
