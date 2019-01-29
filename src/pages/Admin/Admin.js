import React from 'react'

import Loader from 'shared/Loader'
import Products from './Products'

const Profile = ({ currentUser, isLoading, productId }) => (
  <Loader isLoading={isLoading}>
    <p>Logged in as: {currentUser.name}</p>

    <div className="row">
      <div className="col-4 col-sm-6">
        <Products />
      </div>

      {productId && <div>Product id {productId}</div>}
    </div>
  </Loader>
)

export default Profile
