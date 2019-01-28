import { redirect } from 'redux-first-router'

import { toHome } from 'store/routerActions'

import { fetchProducts } from 'store/products/actions'

const routesMap = {
  HOME: {
    path: '/',
    thunk: dispatch => {
      dispatch(fetchProducts())
    },
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
