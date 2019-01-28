import { redirect } from 'redux-first-router'

import { toHome } from 'store/routerActions'

const routesMap = {
  HOME: {
    path: '/',
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
