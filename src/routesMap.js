import { redirect } from 'redux-first-router'

import { toHome, toLogin } from 'store/routerActions'

import { fetchCurrentUser } from 'store/currentUser/actions'
import { fetchProducts } from 'store/products/actions'

const routesMap = {
  ADMIN: {
    path: '/admin',
    thunk: async dispatch => {
      const currentUser = await dispatch(fetchCurrentUser()).catch(() =>
        dispatch(toLogin())
      )
      if (!currentUser.isAdmin) dispatch(toLogin())
      dispatch(fetchProducts())
    },
  },

  HOME: {
    path: '/',
    thunk: dispatch => dispatch(fetchProducts()),
  },

  LOGIN: {
    path: '/login',
  },

  PRODUCT: {
    path: '/products/:productId',
    thunk: dispatch => dispatch(fetchProducts()),
  },

  PROFILE: {
    path: '/profile',
    thunk: dispatch =>
      dispatch(fetchCurrentUser()).catch(() => dispatch(toLogin())),
  },

  CATCH_ALL_REDIRECT: {
    path: '*',
    thunk: dispatch => dispatch(redirect(toHome())),
  },
}

export default routesMap
