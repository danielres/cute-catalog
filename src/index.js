import Cookies from 'js-cookie'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './store'
import { openModal } from 'Modals/bus'

const autoLogoutWatcher = () => {
  setInterval(() => {
    const authExpiresAt = Cookies.get('authExpiresAt')
    const minutesRemaining = Math.round(
      (authExpiresAt - Date.now()) / 1000 / 60
    )
    if (minutesRemaining < 5) openModal('AUTOLOGOUT_WARNING', minutesRemaining)
  }, 1000 * 60)
}

autoLogoutWatcher()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
